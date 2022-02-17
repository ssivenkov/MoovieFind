export enum MAIN_ACTIONS {
  SET_WHATS_POPULAR_FILTER = 'mainReducer/SET-WHATS-POPULAR-FILTER',
  SET_FREE_TO_WATCH_FILTER = 'mainReducer/SET-FREE-TO-WATCH-FILTER',
  SET_LATEST_FILTER = 'mainReducer/SET-LATEST-FILTER',
  SET_TRENDING_FILTER = 'mainReducer/SET-TRENDING-FILTER',
}

export type MainActionsType =
  | ReturnType<typeof setWhatsPopularFilter>
  | ReturnType<typeof setFreeToWatchFilter>
  | ReturnType<typeof setLatestFilter>
  | ReturnType<typeof setTrendingFilter>;

export const setWhatsPopularFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER, filter } as const);

export const setFreeToWatchFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_FREE_TO_WATCH_FILTER, filter } as const);

export const setLatestFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_LATEST_FILTER, filter } as const);

export const setTrendingFilter = (filter: number) =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_FILTER, filter } as const);
