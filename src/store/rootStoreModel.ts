import { CARDS_PER_PAGE_COUNT, DAY, TV } from 'constants/common';

import { types } from 'mobx-state-tree';

import { AppStoreModel } from './appStore/appStoreModel';
import { MainPageStoreModel } from './mainPageStore/mainPageStoreModel';
import { MovieCardsStoreModel } from './movieCardsStore/movieCardsStoreModel';
import {
  initialCastValue,
  initialExternalLinksValue,
  initialMoviePageValue,
} from './moviePageStore/initialValues';
import { MoviePageStoreModel } from './moviePageStore/moviePageStoreModel';
import { PeopleStoreModel } from './peopleStore/peopleStoreModel';
import { TVShowCardsStoreModel } from './tvShowCardsStore/tvShowCardsStoreModel';

export const rootStoreModel = types.model('RootStore').props({
  appStore: types.optional(AppStoreModel, {
    appInitialized: false,
    contentInitialized: false,
    language: 'en-US',
    modalText: '',
    searchRequest: '',
  }),
  mainStore: types.optional(MainPageStoreModel, {
    whatsPopularFilter: TV,
    trendingFilter: TV,
    trendingTimeFilter: DAY,
    trendingMovies: [],
    trendingTVShows: [],
    sliderPage: 1,
    searchImageLink: '',
  }),
  moviePageStore: types.optional(MoviePageStoreModel, {
    movie: initialMoviePageValue,
    cast: initialCastValue,
    externalLinks: initialExternalLinksValue,
  }),
  movieCardsStore: types.optional(MovieCardsStoreModel, {
    movieCards: [],
    moviesInOnePageCount: CARDS_PER_PAGE_COUNT,
    totalMoviesCount: 0,
  }),
  peopleStore: types.optional(PeopleStoreModel, {
    people: [],
    peopleCountInOnePage: CARDS_PER_PAGE_COUNT,
    totalPeopleCount: 0,
  }),
  tvShowCardsStore: types.optional(TVShowCardsStoreModel, {
    tvShowCards: [],
    tvShowsCountInOnePage: CARDS_PER_PAGE_COUNT,
    totalTVShowsCount: 0,
  }),
});
