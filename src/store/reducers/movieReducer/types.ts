import { ClearMovieDataActionReturnType } from 'store/actions/movieReducerActions/clearMovieDataAction';
import { SetMovieDataActionReturnType } from 'store/actions/movieReducerActions/setMovieDataAction';
import { NullableType } from 'types/commonTypes/NullableType';

export type GenresType = {
  id?: number;
  name?: string;
};

export type ProductionCompaniesType = {
  name?: string;
  id?: number;
  logo_path?: NullableType<string>;
  origin_country?: string;
};

export type ProductionCountriesType = {
  iso_639_1?: string;
  name?: string;
};

export type SpokenLanguagesType = {
  iso_3166_1?: string;
  name?: string;
};

export type MovieDataType = {
  adult?: boolean;
  backdrop_path?: NullableType<string>;
  belongs_to_collection?: NullableType<object>;
  budget?: number;
  genres?: GenresType[];
  homepage?: NullableType<string>;
  id: number;
  imdb_id?: NullableType<string>;
  original_language?: string;
  original_title?: string;
  overview?: NullableType<string>;
  popularity?: number;
  poster_path?: NullableType<string>;
  production_companies?: ProductionCompaniesType[];
  production_countries?: Array<any>;
  release_date?: string;
  revenue?: number;
  runtime?: NullableType<number>;
  spoken_languages?: SpokenLanguagesType[];
  status?: string;
  tagline?: NullableType<string>;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type MovieReducerStateType = {
  movieData: MovieDataType;
};

export type MovieReducerActionsType =
  | SetMovieDataActionReturnType
  | ClearMovieDataActionReturnType;
