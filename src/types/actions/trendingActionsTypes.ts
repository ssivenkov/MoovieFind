import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export type SetTrendingMoviesActionType = {
  type: string;
  trendingMovies: Array<MovieType>;
};

export type SetTrendingTVShowsActionType = {
  type: string;
  trendingTVShows: Array<TVShowType>;
};

export type TrendingActionsType = SetTrendingMoviesActionType &
  SetTrendingTVShowsActionType;
