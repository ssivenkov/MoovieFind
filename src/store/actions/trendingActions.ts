export enum TRENDING_ACTIONS {
  SET_TRENDING_MOVIES = 'trendingReducer/SET-TRENDING-MOVIES',
  SET_TRENDING_TVSHOWS = 'trendingReducer/SET-TRENDING-TVSHOWS',
}

export type TrendingActionsType =
  | ReturnType<typeof setTrendingMovies>
  | ReturnType<typeof setTrendingTVShows>;

export const setTrendingMovies = (trendingMovies: Array<any>) =>
  ({
    type: TRENDING_ACTIONS.SET_TRENDING_MOVIES,
    trendingMovies,
  } as const);

export const setTrendingTVShows = (trendingTVShows: Array<any>) =>
  ({
    type: TRENDING_ACTIONS.SET_TRENDING_TVSHOWS,
    trendingTVShows,
  } as const);
