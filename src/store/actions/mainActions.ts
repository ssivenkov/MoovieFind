import { MAIN_ACTIONS } from 'enums/mainEnum';
import {
  ClearSearchImageLinkActionType,
  SetSearchImageLinkActionType,
  SetTrendingFilterActionType,
  SetTrendingTimeFilterActionType,
  SetWhatsPopularFilterActionType,
} from 'types/actions/mainActionsTypes';
import { MovieFilterType, TimeFilterType } from 'types/commonTypes/FilterTypes';

export const setWhatsPopularFilter = (
  filter: MovieFilterType,
): SetWhatsPopularFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER, filter } as const);

export const setTrendingFilter = (filter: MovieFilterType): SetTrendingFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_FILTER, filter } as const);

export const setTrendingTimeFilter = (
  filter: TimeFilterType,
): SetTrendingTimeFilterActionType =>
  ({ type: MAIN_ACTIONS.SET_TRENDING_TIME_FILTER, filter } as const);

export const setSearchImageLink = (link: string): SetSearchImageLinkActionType =>
  ({ type: MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK, link } as const);

export const clearSearchImageLink = (): ClearSearchImageLinkActionType =>
  ({ type: MAIN_ACTIONS.CLEAR_SEARCH_IMAGE_LINK } as const);
