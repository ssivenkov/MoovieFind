import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export type setTrendingMoviesActionType = {
  type: string;
  trendingMovies: Array<MovieType>;
};

export type setTrendingTVShowsActionType = {
  type: string;
  trendingTVShows: Array<TVShowType>;
};

export type TrendingActionsType = setTrendingMoviesActionType &
  setTrendingTVShowsActionType;
