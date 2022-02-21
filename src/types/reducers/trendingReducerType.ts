import { MovieType } from './movieReducerType';
import { TVShowType } from './TVShowsReducerType';

export type InitialMoviesStateType = {
  trendingMovies: Array<MovieType>;
  trendingTVShows: Array<TVShowType>;
  sliderPage: number;
};
