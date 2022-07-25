import { TrendingReducerStateType } from 'store/reducers/trendingReducer/types';
import { AppRootStateType } from 'store/store';

export const getTrendingMoviesListSelector = (
  state: AppRootStateType,
): TrendingReducerStateType['trendingMovies'] => state.trending.trendingMovies;

export const getTrendingTVShowsListSelector = (
  state: AppRootStateType,
): TrendingReducerStateType['trendingTVShows'] => state.trending.trendingTVShows;

export const getSliderPageSelector = (
  state: AppRootStateType,
): TrendingReducerStateType['sliderPage'] => state.trending.sliderPage;
