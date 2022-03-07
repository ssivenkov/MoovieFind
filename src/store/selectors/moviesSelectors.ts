import { AppRootStateType } from 'store/store';
import { MovieType } from 'types/reducers/movieReducerTypes';

export const getMoviesList = (state: AppRootStateType): MovieType[] =>
  state.movies.moviesList;

export const getMoviesCountInOnePage = (state: AppRootStateType): number =>
  state.movies.moviesCountInOnePage;

export const getCurrentPage = (state: AppRootStateType): number =>
  state.movies.currentPage;

export const getTotalMoviesCount = (state: AppRootStateType): number =>
  state.movies.totalMoviesCount;
