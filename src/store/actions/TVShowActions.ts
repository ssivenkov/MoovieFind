import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import {
  SetCurrentPageActionType,
  SetTVShowsActionType,
} from 'types/actions/TVShowActionsTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const setTVShows = (TVShows: Array<TVShowType>): SetTVShowsActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_TVSHOWS, TVShows } as const);

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
