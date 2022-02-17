import { APP_ACTIONS, AppActionsType } from 'store/actions/appActions';

const initialAppState = {
  appInitialized: false,
  language: 'en-US',
  contentInitialized: false,
};

export type InitialAppStateType = typeof initialAppState;

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: AppActionsType,
): InitialAppStateType => {
  switch (action.type) {
    case APP_ACTIONS.SET_APP_INITIALIZED_TRUE:
      return { ...state, appInitialized: true };
    case APP_ACTIONS.SET_APP_INITIALIZED_FALSE:
      return { ...state, appInitialized: false };
    default:
      return state;
  }
};
