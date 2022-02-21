import {
  setCurrentPageActionType,
  setMoviesActionType,
} from 'types/actions/moviesActionsTypes';
import { MovieType } from 'types/reducers/movieReducerType';

export enum MOVIES_ACTIONS {
  SET_MOVIES = 'moviesReducer/SET_MOVIES',
  SET_CURRENT_PAGE = 'moviesReducer/SET_CURRENT_PAGE',
}

export const setMovies = (movies: Array<MovieType>): setMoviesActionType =>
  ({ type: MOVIES_ACTIONS.SET_MOVIES, movies } as const);

export const setCurrentPage = (currentPage: number): setCurrentPageActionType =>
  ({ type: MOVIES_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
