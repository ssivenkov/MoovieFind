import { SetCurrentPageActionReturnType } from 'store/actions/tvShowReducerActions/setCurrentPageAction';
import { SetTVShowsDataActionReturnType } from 'store/actions/tvShowReducerActions/setTVShowsDataAction';
import { NullableType } from 'types/common/nullableType';

export type TVShowType = {
  poster_path: NullableType<string>;
  popularity: number;
  id: number;
  backdrop_path: NullableType<string>;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};

export type TVShowsReducerStateType = {
  tvShowsList: TVShowType[];
  currentPage: number;
  tvShowsCountInOnePage: number;
  totalTVShowsCount: number;
};

export type TVShowsReducerActionsType =
  | SetCurrentPageActionReturnType
  | SetTVShowsDataActionReturnType;
