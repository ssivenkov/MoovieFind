import { EMPTY_STRING } from 'constants/common';
import { APP_ACTIONS } from 'enums/appEnum';
import { AppActionsTypes } from 'types/actions/appActionsTypes';
import { InitialAppStateType } from 'types/reducers/appReducerTypes';

const initialAppState = {
  appInitialized: false,
  language: 'en-US',
  contentInitialized: false,
  searchRequest: EMPTY_STRING,
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
    case APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_TRUE:
      return { ...state, contentInitialized: true };
    case APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_FALSE:
      return { ...state, contentInitialized: false };
    default:
      return state;
  }
};
