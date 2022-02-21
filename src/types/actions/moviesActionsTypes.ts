import { MovieType } from 'types/reducers/movieReducerType';

export type setMoviesActionType = {
  type: string;
  movies: Array<MovieType>;
};

export type setCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type MoviesActionsTypes = setMoviesActionType & setCurrentPageActionType;
