import {
  setCurrentPageActionType,
  setTVShowsActionType,
} from 'types/actions/TVShowActionsTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

export enum TVSHOWS_ACTIONS {
  SET_TVSHOWS = 'TWShowsReducer/SET_TVSHOWS',
  SET_CURRENT_PAGE = 'TWShowsReducer/SET_CURRENT_PAGE',
}

export const setTVShows = (TVShows: Array<TVShowType>): setTVShowsActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_TVSHOWS, TVShows } as const);

export const setCurrentPage = (currentPage: number): setCurrentPageActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
