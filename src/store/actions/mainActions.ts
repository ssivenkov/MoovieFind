import {
  MovieFilterType,
  setLatestTrailersFilterActionType,
  setTrendingFilterActionType,
  setTrendingTimeFilterActionType,
  setWhatsPopularFilterActionType,
  TimeFilterType,
} from 'types/actions/mainActionsTypes';

export enum MAIN_ACTIONS {
  SET_WHATS_POPULAR_FILTER = 'mainReducer/SET_WHATS_POPULAR_FILTER',
  SET_LATEST_TRAILERS_FILTER = 'mainReducer/SET_LATEST_TRAILERS_FILTER',
  SET_TRENDING_FILTER = 'mainReducer/SET_TRENDING_FILTER',
  SET_TRENDING_TIME_FILTER = 'mainReducer/SET_TRENDING_TIME_FILTER',
}

export const setWhatsPopularFilter = (
  filter: MovieFilterType,
): setWhatsPopularFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER, filter } as const);

export const setLatestTrailersFilter = (
  filter: MovieFilterType,
): setLatestTrailersFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_LATEST_TRAILERS_FILTER, filter } as const);

export const setTrendingFilter = (filter: MovieFilterType): setTrendingFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_FILTER, filter } as const);

export const setTrendingTimeFilter = (
  filter: TimeFilterType,
): setTrendingTimeFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_TIME_FILTER, filter } as const);
