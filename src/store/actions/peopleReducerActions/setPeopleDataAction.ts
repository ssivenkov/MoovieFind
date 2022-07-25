import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import { PeopleDataResponseType } from 'store/reducers/peopleReducer/types';

type SetPeopleDataActionPayloadType = {
  peopleData: PeopleDataResponseType;
};

export type SetPeopleDataActionReturnType = {
  type: PEOPLE_ACTIONS.SET_PEOPLE_DATA;
  payload: SetPeopleDataActionPayloadType;
};

export type SetPeopleDataActionType = (
  payload: SetPeopleDataActionPayloadType,
) => SetPeopleDataActionReturnType;

export const setPeopleDataAction: SetPeopleDataActionType = (
  payload,
): SetPeopleDataActionReturnType => ({
  type: PEOPLE_ACTIONS.SET_PEOPLE_DATA,
  payload,
});
