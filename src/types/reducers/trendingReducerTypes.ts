import { MovieType } from './moviesReducerTypes';
import { TVShowType } from './TVShowsReducerTypes';

export type InitialMoviesStateType = {
  trendingMovies: Array<MovieType>;
  trendingTVShows: Array<TVShowType>;
  sliderPage: number;
};
