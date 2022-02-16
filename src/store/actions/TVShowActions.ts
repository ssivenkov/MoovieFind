import { TVShowType } from 'store/reducers/TVShowsReducer';

export enum TVSHOWS_ACTIONS {
  SET_TVSHOWS = 'TWShowsReducer/SET-TVSHOWS',
  SET_CURRENT_PAGE = 'TWShowsReducer/SET-CURRENT-PAGE',
}

export type TVShowsActionsType =
  | ReturnType<typeof setTVShows>
  | ReturnType<typeof setCurrentPage>;

export const setTVShows = (TVShows: Array<TVShowType>) =>
  ({ type: TVSHOWS_ACTIONS.SET_TVSHOWS, TVShows } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
