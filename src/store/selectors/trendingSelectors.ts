import { TrendingReducerStateType } from 'store/reducers/trendingReducer/types';
import { AppRootStateType } from 'store/store';

export const trendingMoviesListSelector = (
  state: AppRootStateType,
): TrendingReducerStateType['trendingMovies'] => state.trending.trendingMovies;

export const trendingTVShowsListSelector = (
  state: AppRootStateType,
): TrendingReducerStateType['trendingTVShows'] => state.trending.trendingTVShows;

export const sliderPageSelector = (
  state: AppRootStateType,
): TrendingReducerStateType['sliderPage'] => state.trending.sliderPage;
