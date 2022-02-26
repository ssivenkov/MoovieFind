import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import {
  setCurrentPageActionType,
  setPeopleActionType,
} from 'types/actions/peopleActionsTypes';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const setPeople = (people: Array<PeopleType>): setPeopleActionType =>
  ({ type: PEOPLE_ACTIONS.SET_PEOPLE, people } as const);

export const setCurrentPage = (currentPage: number): setCurrentPageActionType =>
  ({ type: PEOPLE_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
