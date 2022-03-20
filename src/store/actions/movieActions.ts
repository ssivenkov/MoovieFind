import { MOVIE_ACTIONS } from 'enums/movieEnum';
import {
  ClearMovieDataActionType,
  SetMovieDataActionType,
} from 'types/actions/movieActionsTypes';
import { MovieDataType } from 'types/reducers/movieReducerTypes';

export const setMovieData = (movieData: MovieDataType): SetMovieDataActionType => ({
  type: MOVIE_ACTIONS.SET_MOVIE_DATA,
  movieData,
});

export const clearMovieData = (): ClearMovieDataActionType => ({
  type: MOVIE_ACTIONS.CLEAR_MOVIE_DATA,
});
