import { NullableType } from 'types/commonTypes/NullableType';

export type GenresType = {
  id?: number;
  name?: string;
};

export type ProductionCompaniesType = {
  name?: string;
  id?: number;
  // eslint-disable-next-line camelcase
  logo_path?: NullableType<string>;
  // eslint-disable-next-line camelcase
  origin_country?: string;
  // eslint-disable-next-line camelcase
};

export type ProductionCountriesType = {
  // eslint-disable-next-line camelcase
  iso_639_1?: string;
  name?: string;
};

export type SpokenLanguagesType = {
  // eslint-disable-next-line camelcase
  iso_3166_1?: string;
  name?: string;
};

export type MovieDataType = {
  adult?: boolean;
  // eslint-disable-next-line camelcase
  backdrop_path?: NullableType<string>;
  // eslint-disable-next-line camelcase
  belongs_to_collection?: NullableType<object>;
  budget?: number;
  genres?: Array<GenresType>;
  homepage?: NullableType<string>;
  id: number;
  // eslint-disable-next-line camelcase
  imdb_id?: NullableType<string>;
  // eslint-disable-next-line camelcase
  original_language?: string;
  // eslint-disable-next-line camelcase
  original_title?: string;
  overview?: NullableType<string>;
  popularity?: number;
  // eslint-disable-next-line camelcase
  poster_path?: NullableType<string>;
  // eslint-disable-next-line camelcase
  production_companies?: Array<ProductionCompaniesType>;
  // eslint-disable-next-line camelcase
  production_countries?: Array<any>;
  // eslint-disable-next-line camelcase
  release_date?: string;
  revenue?: number;
  runtime?: NullableType<number>;
  // eslint-disable-next-line camelcase
  spoken_languages?: Array<SpokenLanguagesType>;
  status?: string;
  tagline?: NullableType<string>;
  title?: string;
  video?: boolean;
  // eslint-disable-next-line camelcase
  vote_average?: number;
  // eslint-disable-next-line camelcase
  vote_count?: number;
};

export type InitialMovieStateType = {
  movieData: MovieDataType;
};
