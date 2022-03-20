import { AppRootStateType } from 'store/store';
import { MovieType } from 'types/reducers/moviesReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const getTrendingMoviesListSelector = (state: AppRootStateType): MovieType[] =>
  state.trending.trendingMovies;

export const getTrendingTVShowsListSelector = (state: AppRootStateType): TVShowType[] =>
  state.trending.trendingTVShows;

export const getSliderPageSelector = (state: AppRootStateType): number =>
  state.trending.sliderPage;
