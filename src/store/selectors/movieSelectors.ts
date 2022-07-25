import { MovieReducerStateType } from 'store/reducers/movieReducer/types';
import { AppRootStateType } from 'store/store';

export const getMovieSelector = (
  state: AppRootStateType,
): MovieReducerStateType['movieData'] => state.movie.movieData;
