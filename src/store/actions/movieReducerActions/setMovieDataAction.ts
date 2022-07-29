import { MOVIE_ACTIONS } from 'enums/movieEnum';
import { MovieReducerStateType } from 'store/reducers/movieReducer/types';

type SetMovieDataActionPayloadType = {
  movieData: MovieReducerStateType['movieData'];
};

export type SetMovieDataActionReturnType = {
  type: MOVIE_ACTIONS.SET_MOVIE_DATA;
  payload: SetMovieDataActionPayloadType;
};

export type SetMovieDataActionType = (
  payload: SetMovieDataActionPayloadType,
) => SetMovieDataActionReturnType;

export const setMovieDataAction: SetMovieDataActionType = (
  payload,
): SetMovieDataActionReturnType => ({
  type: MOVIE_ACTIONS.SET_MOVIE_DATA,
  payload,
});
