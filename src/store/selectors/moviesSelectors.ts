import { AppRootStateType } from 'store/store';
import { MovieType } from 'types/reducers/moviesReducerTypes';

export const getMoviesListSelector = (state: AppRootStateType): MovieType[] =>
  state.movies.moviesList;

export const getMoviesCountInOnePageSelector = (state: AppRootStateType): number =>
  state.movies.moviesCountInOnePage;

export const getCurrentPageSelector = (state: AppRootStateType): number =>
  state.movies.currentPage;

export const getTotalMoviesCountSelector = (state: AppRootStateType): number =>
  state.movies.totalMoviesCount;
