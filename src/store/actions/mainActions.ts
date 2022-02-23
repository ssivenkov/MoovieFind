import { MAIN_ACTIONS } from 'enums/mainEnum';
import {
  setSearchImageLinkActionType,
  setTrendingFilterActionType,
  setTrendingTimeFilterActionType,
  setWhatsPopularFilterActionType,
} from 'types/actions/mainActionsTypes';
import { MovieFilterType, TimeFilterType } from 'types/common/FilterTypes';

export const setWhatsPopularFilter = (
  filter: MovieFilterType,
): setWhatsPopularFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER, filter } as const);

export const setTrendingFilter = (filter: MovieFilterType): setTrendingFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_FILTER, filter } as const);

export const setTrendingTimeFilter = (
  filter: TimeFilterType,
): setTrendingTimeFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_TIME_FILTER, filter } as const);

export const setSearchImageLink = (link: string): setSearchImageLinkActionType =>
  ({ type: MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK, link } as const);
