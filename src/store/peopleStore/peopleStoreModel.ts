import { MAX_ITEMS_COUNT, MAX_PAGES_COUNT, PAGE_MULTIPLIER } from 'constants/common';

import { api_key } from 'api/config';
import { PeopleAPI } from 'api/peopleAPI/peopleAPI';
import { store } from 'index';
import { cast, flow, getSnapshot, types } from 'mobx-state-tree';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType, AxiosPagesResponse } from 'types/api/responseTypes';

import { PersonType } from './types';

const KnownForMovieModel = types.model('KnownForMovie').props({
  media_type: types.string,
  poster_path: types.maybeNull(types.string),
  adult: types.boolean,
  overview: types.string,
  release_date: types.string,
  original_title: types.string,
  genre_ids: types.array(types.number),
  id: types.number,
  original_language: types.string,
  title: types.string,
  backdrop_path: types.maybeNull(types.string),
  popularity: types.optional(types.number, 0),
  vote_count: types.number,
  video: types.boolean,
  vote_average: types.number,
});

const KnownForTVShowModel = types.model('KnownForTVShow').props({
  media_type: types.string,
  poster_path: types.maybeNull(types.string),
  popularity: types.optional(types.number, 0),
  id: types.number,
  overview: types.string,
  backdrop_path: types.maybeNull(types.string),
  vote_average: types.number,
  first_air_date: types.string,
  origin_country: types.array(types.string),
  genre_ids: types.array(types.number),
  original_language: types.string,
  vote_count: types.number,
  name: types.string,
  original_name: types.string,
});

const PersonModel = types.model('Person').props({
  adult: types.boolean,
  gender: types.number,
  id: types.identifierNumber,
  known_for: types.array(types.union(KnownForMovieModel, KnownForTVShowModel)),
  known_for_department: types.string,
  name: types.string,
  popularity: types.number,
  profile_path: types.maybeNull(types.string),
});

export const PeopleStoreModel = types
  .model('PeopleStore')
  .props({
    people: types.array(PersonModel),
    peopleCountInOnePage: types.number,
    totalPeopleCount: types.number,
  })
  .actions((self) => ({
    setPeopleList(people: PersonType[]) {
      self.people = cast(people);
    },

    getPeople: flow(function* (page: number) {
      try {
        const { language } = getSnapshot(store.appStore);
        const defaultRequestObject: FullRequestType = { api_key, language, page };
        const part1RequestObject = { ...defaultRequestObject };

        part1RequestObject.page = part1RequestObject.page * PAGE_MULTIPLIER - 1;
        const part1Response: AxiosPagesResponse<PersonType[]> =
          yield PeopleAPI.getPopular(part1RequestObject);

        if (part1Response.data.total_pages > MAX_PAGES_COUNT) {
          part1Response.data.total_pages = MAX_PAGES_COUNT;
        }

        if (part1Response.data.total_results > MAX_ITEMS_COUNT) {
          part1Response.data.total_results = MAX_ITEMS_COUNT;
        }

        const peopleData: AxiosPagesDataType<PersonType[]> = part1Response.data;
        const part2RequestObject = { ...defaultRequestObject };

        part2RequestObject.page = part1RequestObject.page + 1;
        const part2Response: AxiosPagesResponse<PersonType[]> =
          yield PeopleAPI.getPopular(part2RequestObject);

        peopleData.results = [
          ...part1Response.data.results,
          ...part2Response.data.results,
        ];

        self.people = cast(peopleData.results);
        self.totalPeopleCount = peopleData.total_results;

        store.appStore.setContentInitialized(true);
      } catch (error) {
        store.appStore.setModalText(`Error getting people cards. ${error}`);
      } finally {
        store.appStore.setAppInitialized(true);
      }
    }),
  }));
