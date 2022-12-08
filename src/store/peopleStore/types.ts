import { NullableType } from 'types/common/nullableType';

type KnownForMovieType = {
  media_type: string;
  poster_path: NullableType<string>;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  title: string;
  backdrop_path: NullableType<string>;
  popularity?: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

type KnownForTVShowType = {
  media_type: string;
  poster_path: NullableType<string>;
  popularity?: number;
  id: number;
  overview: string;
  backdrop_path: NullableType<string>;
  vote_average: number;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};

export type PersonType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: Array<KnownForMovieType | KnownForTVShowType>;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: NullableType<string>;
};
