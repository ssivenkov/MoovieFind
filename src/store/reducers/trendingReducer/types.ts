import { SetTrendingMoviesActionReturnType } from 'store/actions/trendingReducerActions/setTrendingMoviesAction';
import { SetTrendingTVShowsActionReturnType } from 'store/actions/trendingReducerActions/setTrendingTVShowsAction';
import { MovieType } from 'store/reducers/moviesReducer/types';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';

export type TrendingReducerStateType = {
  trendingMovies: MovieType[];
  trendingTVShows: TVShowType[];
  sliderPage: number;
};

export type TrendingReducerActionsType =
  | SetTrendingTVShowsActionReturnType
  | SetTrendingMoviesActionReturnType;
