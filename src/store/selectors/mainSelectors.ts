import { MainReducerStateType } from 'store/reducers/mainReducer/types';
import { AppRootStateType } from 'store/store';

export const getWhatsPopularFilterSelector = (
  state: AppRootStateType,
): MainReducerStateType['whatsPopularFilter'] => state.main.whatsPopularFilter;

export const getTrendingFilterSelector = (
  state: AppRootStateType,
): MainReducerStateType['trendingFilter'] => state.main.trendingFilter;

export const getTrendingTimeFilterSelector = (
  state: AppRootStateType,
): MainReducerStateType['trendingTimeFilter'] => state.main.trendingTimeFilter;

export const getSearchImageLinkSelector = (
  state: AppRootStateType,
): MainReducerStateType['searchImageLink'] => state.main.searchImageLink;
