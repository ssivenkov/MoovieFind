import { MovieType } from 'types/reducers/movieReducerTypes';

export type MoviesDataResponseType = {
  results: MovieType[];
  page: number;
  // eslint-disable-next-line camelcase
  total_pages: number;
  // eslint-disable-next-line camelcase
  total_results: number;
};

export type SetMoviesActionType = {
  type: string;
  moviesData: MoviesDataResponseType;
};

export type SetCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type MoviesActionsTypes = SetMoviesActionType & SetCurrentPageActionType;
