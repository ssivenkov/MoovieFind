import { PeopleReducerStateType } from 'store/reducers/peopleReducer/types';
import { AppRootStateType } from 'store/store';

export const peopleListSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['peopleList'] => state.people.peopleList;

export const peopleCountInOnePageSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['peopleCountInOnePage'] => state.people.peopleCountInOnePage;

export const currentPageSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['currentPage'] => state.people.currentPage;

export const totalPeopleCountSelector = (
  state: AppRootStateType,
): PeopleReducerStateType['totalPeopleCount'] => state.people.totalPeopleCount;
