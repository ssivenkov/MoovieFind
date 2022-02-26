import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import {
  setCurrentPageActionType,
  setTVShowsActionType,
} from 'types/actions/TVShowActionsTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const setTVShows = (TVShows: Array<TVShowType>): setTVShowsActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_TVSHOWS, TVShows } as const);

export const setCurrentPage = (currentPage: number): setCurrentPageActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
