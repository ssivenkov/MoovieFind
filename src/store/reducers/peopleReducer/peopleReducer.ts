import { ZERO, ONE, CardsCountInOnePage } from 'constants/common';
import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import {
  PeopleReducerActionsType,
  PeopleReducerStateType,
} from 'store/reducers/peopleReducer/types';

const peopleReducerState = {
  peopleList: [],
  currentPage: ONE,
  peopleCountInOnePage: CardsCountInOnePage,
  totalPeopleCount: ZERO,
};

export const peopleReducer = (
  state: PeopleReducerStateType = peopleReducerState,
  action: PeopleReducerActionsType,
): PeopleReducerStateType => {
  switch (action.type) {
    case PEOPLE_ACTIONS.SET_PEOPLE_DATA:
      return {
        ...state,
        peopleList: action.payload.peopleData.results,
        totalPeopleCount: action.payload.peopleData.total_results,
      };
    case PEOPLE_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
