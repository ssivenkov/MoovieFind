import { AppRootStateType } from 'store/store';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const getPeopleListSelector = (state: AppRootStateType): PeopleType[] =>
  state.people.peopleList;

export const getPeopleCountInOnePageSelector = (state: AppRootStateType): number =>
  state.people.peopleCountInOnePage;

export const getCurrentPageSelector = (state: AppRootStateType): number =>
  state.people.currentPage;

export const getTotalPeopleCountSelector = (state: AppRootStateType): number =>
  state.people.totalPeopleCount;
