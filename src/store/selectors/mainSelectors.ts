import { MainReducerStateType } from 'store/reducers/mainReducer/types';
import { AppRootStateType } from 'store/store';

export const whatsPopularFilterSelector = (
  state: AppRootStateType,
): MainReducerStateType['whatsPopularFilter'] => state.main.whatsPopularFilter;

export const trendingFilterSelector = (
  state: AppRootStateType,
): MainReducerStateType['trendingFilter'] => state.main.trendingFilter;

export const trendingTimeFilterSelector = (
  state: AppRootStateType,
): MainReducerStateType['trendingTimeFilter'] => state.main.trendingTimeFilter;

export const searchImageLinkSelector = (
  state: AppRootStateType,
): MainReducerStateType['searchImageLink'] => state.main.searchImageLink;
