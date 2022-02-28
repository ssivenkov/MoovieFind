import { ZERO, ONE, FORTY } from 'constants/common';
import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import { PeopleActionsType } from 'types/actions/peopleActionsTypes';
import { InitialPeopleStateType, PeopleType } from 'types/reducers/peopleReducerTypes';

const initialPeopleState = {
  peopleList: [] as PeopleType[],
  currentPage: ONE,
  peopleCountInOnePage: FORTY,
  totalPeopleCount: ZERO,
};

export const peopleReducer = (
  state: InitialPeopleStateType = initialPeopleState,
  action: PeopleActionsType,
): InitialPeopleStateType => {
  switch (action.type) {
    case PEOPLE_ACTIONS.SET_PEOPLE_DATA:
      return {
        ...state,
        peopleList: action.peopleData.results,
        totalPeopleCount: action.peopleData.total_results,
      };
    case PEOPLE_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};
