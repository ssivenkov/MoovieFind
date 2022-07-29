import { APP_ACTIONS } from 'enums/appEnum';

import { AppReducerActionsType, AppReducerStateType } from './types';

const appReducerState = {
  appInitialized: false,
  language: 'en-US',
  contentInitialized: false,
  searchRequest: '',
  modalText: '',
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
    case APP_ACTIONS.SET_MODAL_TEXT:
      return { ...state, modalText: action.payload.modalText };
    default:
      return state;
  }
};
