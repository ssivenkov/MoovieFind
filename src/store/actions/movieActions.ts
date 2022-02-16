import { MovieType } from 'store/reducers/moviesReducer';

export enum MOVIES_ACTIONS {
  SET_MOVIES = 'moviesReducer/SET-MOVIES',
  SET_CURRENT_PAGE = 'moviesReducer/SET-CURRENT-PAGE',
}

export type MoviesActionsType =
  | ReturnType<typeof setMovies>
  | ReturnType<typeof setCurrentPage>;

export const setMovies = (movies: Array<MovieType>) =>
  ({ type: MOVIES_ACTIONS.SET_MOVIES, movies } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: MOVIES_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
