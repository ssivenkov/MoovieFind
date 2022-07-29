import { SetCurrentPageActionReturnType } from 'store/actions/peopleReducerActions/setCurrentPageAction';
import { SetPeopleDataActionReturnType } from 'store/actions/peopleReducerActions/setPeopleDataAction';
import { NullableType } from 'types/common/nullableType';

type KnownForType1 = {
  media_type: string;

  poster_path?: NullableType<string>;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  original_title?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  title?: string;
  backdrop_path?: NullableType<string>;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

type KnownForType2 = {
  media_type: string;

  poster_path?: NullableType<string>;
  popularity?: number;
  id?: number;
  overview?: string;
  backdrop_path?: NullableType<string>;
  vote_average?: number;
  first_air_date?: string;
  origin_country: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
};

export type PersonType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownForType1 | KnownForType2;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
};

export type PeopleReducerStateType = {
  peopleList: PersonType[];
  currentPage: number;
  peopleCountInOnePage: number;
  totalPeopleCount: number;
};

export type PeopleReducerActionsType =
  | SetCurrentPageActionReturnType
  | SetPeopleDataActionReturnType;
