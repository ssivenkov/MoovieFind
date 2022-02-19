export enum MAIN_ACTIONS {
  SET_WHATS_POPULAR_FILTER = 'mainReducer/SET-WHATS-POPULAR-FILTER',
  SET_LATEST_TRAILERS_FILTER = 'mainReducer/SET-LATEST-TRAILERS-FILTER',
  SET_TRENDING_FILTER = 'mainReducer/SET-TRENDING-FILTER',
  SET_TRENDING_TIME_FILTER = 'mainReducer/SET-TRENDING-TIME-FILTER',
}

export type MainActionsType =
  | ReturnType<typeof setWhatsPopularFilter>
  | ReturnType<typeof setLatestTrailersFilter>
  | ReturnType<typeof setTrendingFilter>
  | ReturnType<typeof setTrendingTimeFilter>;

export const setWhatsPopularFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER, filter } as const);

export const setLatestTrailersFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_LATEST_TRAILERS_FILTER, filter } as const);

export const setTrendingFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_FILTER, filter } as const);

export const setTrendingTimeFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_TIME_FILTER, filter } as const);
