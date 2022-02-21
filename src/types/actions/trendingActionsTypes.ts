import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

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
