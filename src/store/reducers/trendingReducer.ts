import { TRENDING_ACTIONS, TrendingActionsType } from 'store/actions/trendingActions';

export type TrendingItemType = {
  // eslint-disable-next-line camelcase
  poster_path: string;
  adult: false;
  overview: string;
  // eslint-disable-next-line camelcase
  release_date: string;
  // eslint-disable-next-line camelcase
  genre_ids: Array<number>;
  id: number;
  // eslint-disable-next-line camelcase
  original_title: string;
  // eslint-disable-next-line camelcase
  original_language: string;
  title: string;
  // eslint-disable-next-line camelcase
  backdrop_path: string;
  popularity: number;
  // eslint-disable-next-line camelcase
  vote_count: number;
  video: false;
  // eslint-disable-next-line camelcase
  vote_average: number;
};

export type InitialMoviesStateType = {
  trendingMovies: Array<TrendingItemType>;
  trendingTVShows: Array<TrendingItemType>;
  currentPage: number;
};

const initialTrendingState = {
  trendingMovies: [],
  trendingTVShows: [],
  currentPage: 1,
};

export const trendingReducer = (
  state: InitialMoviesStateType = initialTrendingState,
  action: TrendingActionsType,
): InitialMoviesStateType => {
  switch (action.type) {
    case TRENDING_ACTIONS.SET_TRENDING_MOVIES:
      return { ...state, trendingMovies: action.trendingMovies };
    case TRENDING_ACTIONS.SET_TRENDING_TVSHOWS:
      return { ...state, trendingTVShows: action.trendingTVShows };
    default:
      return state;
  }
};
