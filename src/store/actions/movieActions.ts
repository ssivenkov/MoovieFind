import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import {
  MoviesDataResponseType,
  SetCurrentPageActionType,
  SetMoviesActionType,
} from 'types/actions/moviesActionsTypes';

export const setMoviesData = (moviesData: MoviesDataResponseType): SetMoviesActionType =>
  ({ type: MOVIES_ACTIONS.SET_MOVIES_DATA, moviesData } as const);

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
  ({ type: MOVIES_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
