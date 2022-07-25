import { MovieType } from 'store/reducers/moviesReducer/types';

export type MoovieSectionPropsType = {
  moviesList: Array<MovieType>;
  sectionTitle: string;
};
