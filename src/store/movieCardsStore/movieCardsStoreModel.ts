import { MAX_ITEMS_COUNT, MAX_PAGES_COUNT, PAGE_MULTIPLIER } from 'constants/common';

import { api_key } from 'api/config';
import { store } from 'index';
import { cast, flow, getSnapshot, types } from 'mobx-state-tree';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

import { GetMoviesMethodType, MovieCardType } from './types';

export const MovieCardModel = types.model('MovieCard').props({
  poster_path: types.maybeNull(types.string),
  adult: types.boolean,
  overview: types.string,
  release_date: types.string,
  genre_ids: types.array(types.number),
  id: types.number,
  original_title: types.string,
  original_language: types.string,
  title: types.string,
  backdrop_path: types.maybeNull(types.string),
  popularity: types.number,
  vote_count: types.number,
  video: types.boolean,
  vote_average: types.number,
});

export const MovieCardsStoreModel = types
  .model('MovieCardsStore')
  .props({
    movieCards: types.array(MovieCardModel),
    moviesInOnePageCount: types.number,
    totalMoviesCount: types.number,
  })
  .actions((self) => ({
    setMovieCards(movieCards: MovieCardType[]) {
      self.movieCards = cast(movieCards);
    },

    getMovies: flow(function* (
      method: GetMoviesMethodType,
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

        const movieCardsData: AxiosPagesDataType<MovieCardType[]> = part1Response.data;
        const part2RequestObject = { ...defaultRequestObject };

        part2RequestObject.page = part1RequestObject.page + 1;
        const part2Response = yield method(part2RequestObject);

        movieCardsData.results = [
          ...part1Response.data.results,
          ...part2Response.data.results,
        ];

        if (decrementResultLength) {
          movieCardsData.results.length -= 1;
        }

        self.movieCards = cast(movieCardsData.results);
        self.totalMoviesCount = movieCardsData.total_results;

        store.appStore.setContentInitialized(true);
      } catch (error) {
        store.appStore.setModalText(`Error getting movies cards. ${error}`);
      } finally {
        store.appStore.setAppInitialized(true);
      }
    }),
  }));
