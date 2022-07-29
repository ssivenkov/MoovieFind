import { MovieType } from 'store/reducers/moviesReducer/types';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';

export type TrendingSectionPropsType = {
  trendingTVShowsList: TVShowType[];
  trendingMoviesList: MovieType[];
  filter: string;
  timeFilter: string;
};
