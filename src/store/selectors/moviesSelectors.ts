import { MoviesReducerStateType } from 'store/reducers/moviesReducer/types';
import { AppRootStateType } from 'store/store';

export const getMoviesListSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['moviesList'] => state.movies.moviesList;

export const getMoviesCountInOnePageSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['moviesCountInOnePage'] => state.movies.moviesCountInOnePage;

export const getCurrentPageSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['currentPage'] => state.movies.currentPage;

export const getTotalMoviesCountSelector = (
  state: AppRootStateType,
): MoviesReducerStateType['totalMoviesCount'] => state.movies.totalMoviesCount;
