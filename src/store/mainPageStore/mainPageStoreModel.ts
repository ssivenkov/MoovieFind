import {
  CARDS_PER_PAGE_COUNT,
  DAY,
  MOVIE,
  PAGE_MULTIPLIER,
  TV,
  WEEK,
} from 'constants/common';

import { trendingAPI } from 'api/trendingAPI/trendingAPI';
import { store } from 'index';
import { cast, flow, types } from 'mobx-state-tree';
import { MovieCardModel } from 'store/movieCardsStore/movieCardsStoreModel';
import { MovieCardType } from 'store/movieCardsStore/types';
import { TVShowCardModel } from 'store/tvShowCardsStore/tvShowCardsStoreModel';
import { TVShowCardType } from 'store/tvShowCardsStore/types';
import { AxiosPagesResponse } from 'types/api/responseTypes';

import { ContentFilterType, GetTrendingContentParamsType, TimeFilterType } from './types';

export const MainPageStoreModel = types
  .model('MainStore')
  .props({
    whatsPopularFilter: types.union(types.literal(TV), types.literal(MOVIE)),
    trendingFilter: types.union(types.literal(TV), types.literal(MOVIE)),
    trendingTimeFilter: types.union(types.literal(DAY), types.literal(WEEK)),
    trendingMovies: types.array(MovieCardModel),
    trendingTVShows: types.array(TVShowCardModel),
    sliderPage: types.number,
    searchImageLink: types.string,
  })
  .actions((self) => ({
    setWhatsPopularFilter(whatsPopularFilter: ContentFilterType) {
      self.whatsPopularFilter = whatsPopularFilter;
    },

    setTrendingFilter(trendingFilter: ContentFilterType) {
      self.trendingFilter = trendingFilter;
    },

    setTrendingTimeFilter(trendingTimeFilter: TimeFilterType) {
      self.trendingTimeFilter = trendingTimeFilter;
    },

    setPage(page: number) {
      self.sliderPage = page;
    },

    setRandomSearchBackgroundImage(lists: Array<TVShowCardType[]>) {
      try {
        const unfoldedLists = [...lists.flat()];
        const links = unfoldedLists.map((movie) => movie.backdrop_path);
        const filteredLinks = links.filter((movie) => movie !== null);
        const randomNumber = Math.floor(Math.random() * filteredLinks.length);
        const searchImageLink = filteredLinks[randomNumber];

        if (searchImageLink !== null) {
          self.searchImageLink = searchImageLink;
        }
      } catch (error) {
        store.appStore.setModalText(
          `Error setting random search background image. ${error}`,
        );
      }
    },

    getTrendingTVShows: flow(function* (params: GetTrendingContentParamsType) {
      try {
        const { tempRequestObject, timeWindow } = params;

        const requestObject = { ...tempRequestObject };

        requestObject.page = tempRequestObject.page * PAGE_MULTIPLIER - 1;
        const response1: AxiosPagesResponse<TVShowCardType[]> =
          yield trendingAPI.getTrendingTVShows(tempRequestObject, timeWindow);
        const tempNextPageRequestObj = { ...tempRequestObject };

        for (const key in response1.data.results) {
          const trimmedValue = Number(
            response1.data.results[key].vote_average.toFixed(1),
          );

          response1.data.results[key].vote_average = trimmedValue;
        }

        tempNextPageRequestObj.page += 1;

        const response2: AxiosPagesResponse<TVShowCardType[]> =
          yield trendingAPI.getTrendingTVShows(tempNextPageRequestObj, timeWindow);

        for (const key in response2.data.results) {
          const trimmedValue = Number(
            response2.data.results[key].vote_average.toFixed(1),
          );

          response2.data.results[key].vote_average = trimmedValue;
        }

        const resultResponse = [...response1.data.results, ...response2.data.results];

        if (resultResponse.length === CARDS_PER_PAGE_COUNT) {
          resultResponse.length -= 1;
        }

        self.trendingTVShows = cast(resultResponse);

        store.appStore.setContentInitialized(true);
      } catch (error) {
        store.appStore.setModalText(`Error getting trending tv shows. ${error}`);
      } finally {
        store.appStore.setAppInitialized(true);
      }
    }),

    getTrendingMovies: flow(function* (params: GetTrendingContentParamsType) {
      try {
        const { tempRequestObject, timeWindow } = params;

        const requestObject = { ...tempRequestObject };

        requestObject.page = tempRequestObject.page * PAGE_MULTIPLIER - 1;
        const response1: AxiosPagesResponse<MovieCardType[]> =
          yield trendingAPI.getTrendingMovies(tempRequestObject, timeWindow);
        const tempNextPageRequestObj = { ...tempRequestObject };

        for (const key in response1.data.results) {
          const trimmedValue = Number(
            response1.data.results[key].vote_average.toFixed(1),
          );

          response1.data.results[key].vote_average = trimmedValue;
        }

        tempNextPageRequestObj.page += 1;

        const response2: AxiosPagesResponse<MovieCardType[]> =
          yield trendingAPI.getTrendingMovies(tempNextPageRequestObj, timeWindow);

        for (const key in response2.data.results) {
          const trimmedValue = Number(
            response2.data.results[key].vote_average.toFixed(1),
          );

          response2.data.results[key].vote_average = trimmedValue;
        }

        const resultResponse = [...response1.data.results, ...response2.data.results];

        if (resultResponse.length === CARDS_PER_PAGE_COUNT) {
          resultResponse.length -= 1;
        }

        self.trendingMovies = cast(resultResponse);

        store.appStore.setContentInitialized(true);
      } catch (error) {
        store.appStore.setModalText(`Error getting trending movies. ${error}`);
      } finally {
        store.appStore.setAppInitialized(true);
      }
    }),
  }));
