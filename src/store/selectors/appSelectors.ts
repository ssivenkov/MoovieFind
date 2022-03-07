import { AppRootStateType } from 'store/store';

export const getAppInitialized = (state: AppRootStateType): boolean =>
  state.app.appInitialized;

export const getContentInitialized = (state: AppRootStateType): boolean =>
  state.app.contentInitialized;

export const getAppLanguage = (state: AppRootStateType): string => state.app.language;

export const getSearchRequest = (state: AppRootStateType): string =>
  state.app.searchRequest;
