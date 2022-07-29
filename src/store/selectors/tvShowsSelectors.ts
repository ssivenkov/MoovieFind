import { TVShowsReducerStateType } from 'store/reducers/tvShowsReducer/types';
import { AppRootStateType } from 'store/store';

export const tvShowsListSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['tvShowsList'] => state.tvShows.tvShowsList;

export const tvShowsCountInOnePageSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['tvShowsCountInOnePage'] =>
  state.tvShows.tvShowsCountInOnePage;

export const currentPageSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['currentPage'] => state.tvShows.currentPage;

export const totalTVShowsCountSelector = (
  state: AppRootStateType,
): TVShowsReducerStateType['totalTVShowsCount'] => state.tvShows.totalTVShowsCount;
