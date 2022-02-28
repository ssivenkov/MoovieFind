import { MovieType } from 'types/reducers/movieReducerTypes';

export type SetMoviesActionType = {
  type: string;
  movies: Array<MovieType>;
};

export type SetCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type MoviesActionsTypes = SetMoviesActionType & SetCurrentPageActionType;
