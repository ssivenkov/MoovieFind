import { MovieType } from 'types/reducers/moviesReducerTypes';

export type MoviesDataResponseType = {
  results: MovieType[];
  page: number;
  // eslint-disable-next-line camelcase
  total_pages: number;
  // eslint-disable-next-line camelcase
  total_results: number;
};

export type SetMovieDataActionType = {
  type: string;
  movieData: any;
};

export type ClearMovieDataActionType = {
  type: string;
};

export type MovieActionsTypes = SetMovieDataActionType & ClearMovieDataActionType;
