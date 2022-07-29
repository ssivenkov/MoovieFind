import { MoviesReducerStateType } from 'store/reducers/moviesReducer/types';
import { AppRootStateType } from 'store/store';

export const moviesListSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['moviesList'] => state.movies.moviesList;

export const moviesCountInOnePageSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['moviesCountInOnePage'] => state.movies.moviesCountInOnePage;

export const currentPageSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['currentPage'] => state.movies.currentPage;

export const totalMoviesCountSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['totalMoviesCount'] => state.movies.totalMoviesCount;
