import { NullableType } from 'types/commonTypes/NullableType';

export type TVShowType = {
  // eslint-disable-next-line camelcase
  poster_path: NullableType<string>;
  popularity: number;
  id: number;
  // eslint-disable-next-line camelcase
  backdrop_path: NullableType<string>;
  // eslint-disable-next-line camelcase
  vote_average: number;
  overview: string;
  // eslint-disable-next-line camelcase
  first_air_date: string;
  // eslint-disable-next-line camelcase
  origin_country: string[];
  // eslint-disable-next-line camelcase
  genre_ids: number[];
  // eslint-disable-next-line camelcase
  original_language: string;
  // eslint-disable-next-line camelcase
  vote_count: number;
  name: string;
  // eslint-disable-next-line camelcase
  original_name: string;
};
export type InitialTVShowsStateType = {
  TVShowsList: TVShowType[];
  currentPage: number;
  TVShowsCountInOnePage: number;
  totalTVShowsCount: number;
};
