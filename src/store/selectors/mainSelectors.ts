import { AppRootStateType } from 'store/store';

export const getWhatsPopularFilter = (state: AppRootStateType): string =>
  state.main.WhatsPopularFilter;

export const getTrendingFilter = (state: AppRootStateType): string =>
  state.main.TrendingFilter;

export const getTrendingTimeFilter = (state: AppRootStateType): string =>
  state.main.TrendingTimeFilter;

export const getSearchImageLink = (state: AppRootStateType): string =>
  state.main.SearchImageLink;
