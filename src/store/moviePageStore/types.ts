import { NullableType } from 'types/common/nullableType';

export type BelongsToCollectionType = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export type ProductionCompanyType = {
  name: string;
  id: number;
  logo_path: NullableType<string>;
  origin_country: string;
};

export type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguageType = {
  iso_639_1: string;
  name: string;
};

export type MoviePageType = {
  id: number;
  adult: boolean;
  backdrop_path: NullableType<string>;
  belongs_to_collection: NullableType<BelongsToCollectionType>;
  budget: number;
  genres: GenreType[];
  homepage: NullableType<string>;
  imdb_id: NullableType<string>;
  original_language: string;
  original_title: string;
  overview: NullableType<string>;
  popularity: number;
  poster_path: NullableType<string>;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: NullableType<number>;
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: NullableType<string>;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type CrewType = {
  adult: boolean;
  gender: NullableType<number>;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: NullableType<string>;
  credit_id: string;
  department: string;
  job: string;
};

export type CastType = {
  adult: boolean;
  gender: NullableType<number>;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: NullableType<string>;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type ExternalLinksType = {
  imdb_id: NullableType<string>;
  facebook_id: NullableType<string>;
  instagram_id: NullableType<string>;
  twitter_id: NullableType<string>;
  id: NullableType<number>;
};
