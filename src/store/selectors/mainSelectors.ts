import { AppRootStateType } from 'store/store';

export const getWhatsPopularFilterSelector = (state: AppRootStateType): string =>
  state.main.WhatsPopularFilter;

export const getTrendingFilterSelector = (state: AppRootStateType): string =>
  state.main.TrendingFilter;

export const getTrendingTimeFilterSelector = (state: AppRootStateType): string =>
  state.main.TrendingTimeFilter;

export const getSearchImageLinkSelector = (state: AppRootStateType): string =>
  state.main.SearchImageLink;
