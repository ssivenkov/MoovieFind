import { AppReducerActionsType, AppReducerStateType } from './types';

import { EMPTY_STRING } from 'constants/common';
import { APP_ACTIONS } from 'enums/appEnum';

const appReducerState = {
  appInitialized: false,
  language: 'en-US',
  contentInitialized: false,
  searchRequest: EMPTY_STRING,
};

export const appReducer = (
  state: AppReducerStateType = appReducerState,
  action: AppReducerActionsType,
): AppReducerStateType => {
  switch (action.type) {
    case APP_ACTIONS.SET_APP_INITIALIZE:
      return { ...state, appInitialized: action.payload.appInitialized };
    case APP_ACTIONS.SET_APP_CONTENT_INITIALIZE:
      return { ...state, contentInitialized: action.payload.contentInitialized };
    default:
      return state;
  }
};
