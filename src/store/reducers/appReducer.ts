import { APP_ACTIONS } from 'store/actions/appActions';
import { AppActionsTypes } from 'types/actions/appActionsTypes';
import { InitialAppStateType } from 'types/reducers/appReducerType';

const initialAppState = {
  appInitialized: false,
  language: 'en-US',
  contentInitialized: false,
  searchRequest: '',
};

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: AppActionsTypes,
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
