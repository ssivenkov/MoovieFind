import { AppReducerStateType } from 'store/reducers/appReducer/types';
import { AppRootStateType } from 'store/store';

export const getAppInitializedSelector = (
  state: AppRootStateType,
): AppReducerStateType['appInitialized'] => state.app.appInitialized;

export const getContentInitializedSelector = (
  state: AppRootStateType,
): AppReducerStateType['contentInitialized'] => state.app.contentInitialized;

export const getAppLanguageSelector = (
  state: AppRootStateType,
): AppReducerStateType['language'] => state.app.language;

export const getSearchRequestSelector = (
  state: AppRootStateType,
): AppReducerStateType['searchRequest'] => state.app.searchRequest;

export const modalTextSelector = (
  state: AppRootStateType,
): AppReducerStateType['modalText'] => state.app.modalText;
