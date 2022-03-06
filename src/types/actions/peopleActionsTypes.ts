import { PeopleType } from 'types/reducers/peopleReducerTypes';

export type PeopleDataResponseType = {
  results: PeopleType[];
  page: number;
  // eslint-disable-next-line camelcase
  total_pages: number;
  // eslint-disable-next-line camelcase
  total_results: number;
};

export type SetPeopleActionType = {
  type: string;
  peopleData: PeopleDataResponseType;
};

export type SetCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type PeopleActionsType = SetPeopleActionType & SetCurrentPageActionType;
