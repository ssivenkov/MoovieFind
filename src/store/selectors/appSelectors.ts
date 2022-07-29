import { AppReducerStateType } from 'store/reducers/appReducer/types';
import { AppRootStateType } from 'store/store';

export const appInitializedSelector = (
  state: AppRootStateType,
): AppReducerStateType['appInitialized'] => state.app.appInitialized;

export const contentInitializedSelector = (
  state: AppRootStateType,
): AppReducerStateType['contentInitialized'] => state.app.contentInitialized;

export const appLanguageSelector = (
  state: AppRootStateType,
): AppReducerStateType['language'] => state.app.language;

export const searchRequestSelector = (
  state: AppRootStateType,
): AppReducerStateType['searchRequest'] => state.app.searchRequest;

export const modalTextSelector = (
  state: AppRootStateType,
): AppReducerStateType['modalText'] => state.app.modalText;
