import { SetCurrentPageActionReturnType } from 'store/actions/peopleReducerActions/setCurrentPageAction';
import { SetPeopleDataActionReturnType } from 'store/actions/peopleReducerActions/setPeopleDataAction';

export type PeopleType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: any;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
};

export type PeopleDataResponseType = {
  results: PeopleType[];
  page: number;
  total_pages: number;
  total_results: number;
};

export type PeopleReducerStateType = {
  peopleList: PeopleType[];
  currentPage: number;
  peopleCountInOnePage: number;
  totalPeopleCount: number;
};

export type PeopleReducerActionsType =
  | SetCurrentPageActionReturnType
  | SetPeopleDataActionReturnType;
