import { TVShowsReducerStateType } from 'store/reducers/tvShowsReducer/types';
import { AppRootStateType } from 'store/store';

export const getTVShowsListSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['tvShowsList'] => state.tvShows.tvShowsList;

export const getTVShowsCountInOnePageSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['tvShowsCountInOnePage'] =>
  state.tvShows.tvShowsCountInOnePage;

export const getCurrentPageSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['currentPage'] => state.tvShows.currentPage;

export const getTotalTVShowsCountSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['totalTVShowsCount'] => state.tvShows.totalTVShowsCount;
