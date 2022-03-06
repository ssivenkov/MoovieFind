import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import {
  SetCurrentPageActionType,
  SetTVShowsActionType,
  TVShowsDataResponseType,
} from 'types/actions/TVShowActionsTypes';

export const setTVShowsData = (
  TVShowsData: TVShowsDataResponseType,
): SetTVShowsActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_TVSHOWS_DATA, TVShowsData } as const);

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
  ({ type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
