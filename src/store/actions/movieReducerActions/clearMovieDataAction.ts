import { MOVIE_ACTIONS } from 'enums/movieEnum';

export type ClearMovieDataActionReturnType = {
  type: MOVIE_ACTIONS.CLEAR_MOVIE_DATA;
};

export type ClearMovieDataActionType = () => ClearMovieDataActionReturnType;

export const clearMovieDataAction: ClearMovieDataActionType =
  (): ClearMovieDataActionReturnType => ({
    type: MOVIE_ACTIONS.CLEAR_MOVIE_DATA,
  });
