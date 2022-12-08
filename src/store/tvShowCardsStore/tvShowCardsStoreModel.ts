import { MAX_ITEMS_COUNT, MAX_PAGES_COUNT, PAGE_MULTIPLIER } from 'constants/common';

import { api_key } from 'api/config';
import { store } from 'index';
import { cast, flow, getSnapshot, types } from 'mobx-state-tree';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

import { GetTVShowsMethodType, TVShowCardType } from './types';

export const TVShowCardModel = types.model('TVShowCard').props({
  poster_path: types.maybeNull(types.string),
  popularity: types.number,
  id: types.number,
  backdrop_path: types.maybeNull(types.string),
  vote_average: types.number,
  overview: types.string,
  first_air_date: types.string,
  origin_country: types.array(types.string),
  genre_ids: types.array(types.number),
  original_language: types.string,
  vote_count: types.number,
  name: types.string,
  original_name: types.string,
});

export const TVShowCardsStoreModel = types
  .model('tvShowCardsStore')
  .props({
    tvShowCards: types.array(TVShowCardModel),
    tvShowsCountInOnePage: types.number,
    totalTVShowsCount: types.number,
  })
  .actions((self) => ({
    setTVShowsCards(tvShowCards: TVShowCardType[]) {
      self.tvShowCards = cast(tvShowCards);
    },

    setTotalTVShowsCount(totalTVShowsCount: number) {
      self.totalTVShowsCount = totalTVShowsCount;
    },

    getTVShows: flow(function* (
      method: GetTVShowsMethodType,
      page: number,
      decrementResultLength?: boolean,
    ) {
      try {
        const { language } = getSnapshot(store.appStore);
        const defaultRequestObject: FullRequestType = { api_key, language, page };
        const part1RequestObject = { ...defaultRequestObject };

        part1RequestObject.page = part1RequestObject.page * PAGE_MULTIPLIER - 1;
        const part1Response = yield method(part1RequestObject);

        if (part1Response.data.total_pages > MAX_PAGES_COUNT) {
          part1Response.data.total_pages = MAX_PAGES_COUNT;
        }

        if (part1Response.data.total_results > MAX_ITEMS_COUNT) {
          part1Response.data.total_results = MAX_ITEMS_COUNT;
        }

        const tvShowCardsData: AxiosPagesDataType<TVShowCardType[]> = part1Response.data;
        const part2RequestObject = { ...defaultRequestObject };

        part2RequestObject.page = part1RequestObject.page + 1;
        const part2Response = yield method(part2RequestObject);

        tvShowCardsData.results = [
          ...part1Response.data.results,
          ...part2Response.data.results,
        ];

        if (decrementResultLength) {
          tvShowCardsData.results.length -= 1;
        }

        self.tvShowCards = cast(tvShowCardsData.results);
        self.totalTVShowsCount = tvShowCardsData.total_results;

        store.appStore.setContentInitialized(true);
      } catch (error) {
        store.appStore.setModalText(`Error getting tv shows cards. ${error}`);
      } finally {
        store.appStore.setAppInitialized(true);
      }
    }),
  }));
