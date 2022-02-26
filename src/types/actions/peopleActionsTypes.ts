import { PeopleType } from 'types/reducers/peopleReducerTypes';

export type setPeopleActionType = {
  type: string;
  people: Array<PeopleType>;
};

export type setCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type PeopleActionsType = setPeopleActionType & setCurrentPageActionType;
