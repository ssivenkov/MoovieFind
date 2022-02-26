import { ONE } from 'constants/common';
import { PEOPLE_ACTIONS } from 'enums/peopleEnum';
import { PeopleActionsType } from 'types/actions/peopleActionsTypes';
import { InitialPeopleStateType } from 'types/reducers/peopleReducerTypes';

const initialPeopleState = {
  people: [],
  currentPage: ONE,
};

export const peopleReducer = (
  state: InitialPeopleStateType = initialPeopleState,
  action: PeopleActionsType,
): InitialPeopleStateType => {
  switch (action.type) {
    case PEOPLE_ACTIONS.SET_PEOPLE:
      return { ...state, people: action.people };
    case PEOPLE_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};
