import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import {
  PeopleDataResponseType,
  SetCurrentPageActionType,
  SetPeopleActionType,
} from 'types/actions/peopleActionsTypes';

export const setPeopleData = (peopleData: PeopleDataResponseType): SetPeopleActionType =>
  ({ type: PEOPLE_ACTIONS.SET_PEOPLE_DATA, peopleData } as const);

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
  ({ type: PEOPLE_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
