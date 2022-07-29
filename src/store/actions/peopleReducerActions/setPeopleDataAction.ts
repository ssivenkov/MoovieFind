import { GetPeopleDataResponseType } from 'api/PeopleAPI/types';
import { PEOPLE_ACTIONS } from 'enums/peopleEnum';

type SetPeopleDataActionPayloadType = {
  peopleData: GetPeopleDataResponseType;
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
