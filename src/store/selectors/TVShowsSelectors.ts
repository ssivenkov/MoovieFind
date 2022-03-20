import { AppRootStateType } from 'store/store';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const getTVShowsListSelector = (state: AppRootStateType): TVShowType[] =>
  state.TVShows.TVShowsList;

export const getTVShowsCountInOnePageSelector = (state: AppRootStateType): number =>
  state.TVShows.TVShowsCountInOnePage;

export const getCurrentPageSelector = (state: AppRootStateType): number =>
  state.TVShows.currentPage;

export const getTotalTVShowsCountSelector = (state: AppRootStateType): number =>
  state.TVShows.totalTVShowsCount;
