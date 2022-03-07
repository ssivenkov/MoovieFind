import { AppRootStateType } from 'store/store';
import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const getTrendingMoviesList = (state: AppRootStateType): MovieType[] =>
  state.trending.trendingMovies;

export const getTrendingTVShowsList = (state: AppRootStateType): TVShowType[] =>
  state.trending.trendingTVShows;

export const getSliderPage = (state: AppRootStateType): number =>
  state.trending.sliderPage;
