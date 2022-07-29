import { MovieReducerStateType } from 'store/reducers/movieReducer/types';
import { AppRootStateType } from 'store/store';

export const movieSelector = (
  state: AppRootStateType,
): MovieReducerStateType['movieData'] => state.movie.movieData;
