import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import { PeopleReducerStateType } from 'store/reducers/peopleReducer/types';

type SetCurrentPageActionPayloadType = {
  currentPage: PeopleReducerStateType['currentPage'];
};

export type SetCurrentPageActionReturnType = {
  type: PEOPLE_ACTIONS.SET_CURRENT_PAGE;
  payload: SetCurrentPageActionPayloadType;
};

export type SetCurrentPageActionType = (
  payload: SetCurrentPageActionPayloadType,
) => SetCurrentPageActionReturnType;

export const setCurrentPageAction: SetCurrentPageActionType = (
  payload,
): SetCurrentPageActionReturnType => ({
  type: PEOPLE_ACTIONS.SET_CURRENT_PAGE,
  payload,
});
