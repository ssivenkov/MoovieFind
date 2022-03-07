import { AppRootStateType } from 'store/store';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const getTVShowsList = (state: AppRootStateType): TVShowType[] =>
  state.TVShows.TVShowsList;

export const getTVShowsCountInOnePage = (state: AppRootStateType): number =>
  state.TVShows.TVShowsCountInOnePage;

export const getCurrentPage = (state: AppRootStateType): number =>
  state.TVShows.currentPage;

export const getTotalTVShowsCount = (state: AppRootStateType): number =>
  state.TVShows.totalTVShowsCount;
