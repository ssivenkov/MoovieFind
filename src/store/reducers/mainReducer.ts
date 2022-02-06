import { MAIN_ACTIONS, MainActionsType } from 'store/actions/mainActions';

const initialMainState = {
  error: false,
  textError: '',
};

export type InitialMainStateType = typeof initialMainState;

export const mainReducer = (
  state: InitialMainStateType = initialMainState,
  action: MainActionsType,
): InitialMainStateType => {
  switch (action.type) {
    case MAIN_ACTIONS.SET_ERROR_MESSAGE:
      return { ...state, error: action.error, textError: action.textError };
    default:
      return state;
  }
};
