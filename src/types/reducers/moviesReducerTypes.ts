import { NullableType } from 'types/commonTypes/NullableType';

export type MovieType = {
  // eslint-disable-next-line camelcase
  poster_path?: NullableType<string>;
  adult?: boolean;
  overview?: string;
  // eslint-disable-next-line camelcase
  release_date?: string;
  // eslint-disable-next-line camelcase
  genre_ids?: number[];
  id: number;
  // eslint-disable-next-line camelcase
  original_title?: string;
  // eslint-disable-next-line camelcase
  original_language?: string;
  title?: string;
  // eslint-disable-next-line camelcase
  backdrop_path?: NullableType<string>;
  popularity?: number;
  // eslint-disable-next-line camelcase
  vote_count?: number;
  video?: boolean;
  // eslint-disable-next-line camelcase
  vote_average?: number;
};

export type InitialMoviesStateType = {
  moviesList: MovieType[];
  currentPage: number;
  moviesCountInOnePage: number;
  totalMoviesCount: number;
};
