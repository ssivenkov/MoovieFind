import { MovieType } from 'store/reducers/moviesReducer/types';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';

export type WhatsPopularSectionPropsType = {
  popularTVShowsList: TVShowType[];
  popularMoviesList: MovieType[];
  filter: string;
};
