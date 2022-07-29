import { SetCurrentPageActionReturnType } from 'store/actions/moviesReducerActions/setCurrentPageAction';
import { SetMoviesDataActionReturnType } from 'store/actions/moviesReducerActions/setMoviesDataAction';
import { NullableType } from 'types/common/nullableType';

export type MovieType = {
  poster_path?: NullableType<string>;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: NullableType<string>;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

export type MoviesReducerStateType = {
  moviesList: MovieType[];
  currentPage: number;
  moviesCountInOnePage: number;
  totalMoviesCount: number;
};

export type MoviesReducerActionsType =
  | SetCurrentPageActionReturnType
  | SetMoviesDataActionReturnType;
