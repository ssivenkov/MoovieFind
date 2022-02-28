import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import {
  SetCurrentPageActionType,
  SetMoviesActionType,
} from 'types/actions/moviesActionsTypes';
import { MovieType } from 'types/reducers/movieReducerTypes';

export const setMovies = (movies: Array<MovieType>): SetMoviesActionType =>
  ({ type: MOVIES_ACTIONS.SET_MOVIES, movies } as const);

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
  ({ type: MOVIES_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
