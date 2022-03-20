import { AppRootStateType } from 'store/store';

export const getAppInitializedSelector = (state: AppRootStateType): boolean =>
  state.app.appInitialized;

export const getContentInitializedSelector = (state: AppRootStateType): boolean =>
  state.app.contentInitialized;

export const getAppLanguageSelector = (state: AppRootStateType): string =>
  state.app.language;

export const getSearchRequestSelector = (state: AppRootStateType): string =>
  state.app.searchRequest;
