import { APP_ACTIONS, AppActionsType } from 'store/actions/appActions';

const initialAppState = {
  appInitialized: false,
};

export type InitialAppStateType = typeof initialAppState;

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: AppActionsType,
): InitialAppStateType => {
  switch (action.type) {
    case APP_ACTIONS.SET_INITIALIZED_SUCCESS:
      return { ...state, appInitialized: true };
    default:
      return state;
  }
};
