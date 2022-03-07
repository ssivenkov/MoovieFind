import { AppRootStateType } from 'store/store';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const getPeopleList = (state: AppRootStateType): PeopleType[] =>
  state.people.peopleList;

export const getPeopleCountInOnePage = (state: AppRootStateType): number =>
  state.people.peopleCountInOnePage;

export const getCurrentPage = (state: AppRootStateType): number =>
  state.people.currentPage;

export const getTotalPeopleCount = (state: AppRootStateType): number =>
  state.people.totalPeopleCount;
