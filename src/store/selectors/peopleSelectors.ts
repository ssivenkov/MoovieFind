import { PeopleReducerStateType } from 'store/reducers/peopleReducer/types';
import { AppRootStateType } from 'store/store';

export const getPeopleListSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['peopleList'] => state.people.peopleList;

export const getPeopleCountInOnePageSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['peopleCountInOnePage'] => state.people.peopleCountInOnePage;

export const getCurrentPageSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['currentPage'] => state.people.currentPage;

export const getTotalPeopleCountSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['totalPeopleCount'] => state.people.totalPeopleCount;
