import { AppRootStateType } from 'store/store';
import { MovieDataType } from 'types/reducers/movieReducerTypes';

export const getMovieSelector = (state: AppRootStateType): MovieDataType =>
  state.movie.movieData;
