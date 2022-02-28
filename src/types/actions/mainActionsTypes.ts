import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MovieFilterType, TimeFilterType } from 'types/commonTypes/FilterTypes';

export type SetWhatsPopularFilterActionType = {
  type: typeof MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER;
  filter: MovieFilterType;
};

export type SetTrendingFilterActionType = {
  type: typeof MAIN_ACTIONS.SET_TRENDING_FILTER;
  filter: MovieFilterType;
};

export type SetTrendingTimeFilterActionType = {
  type: typeof MAIN_ACTIONS.SET_TRENDING_TIME_FILTER;
  filter: TimeFilterType;
};

export type SetSearchImageLinkActionType = {
  type: typeof MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK;
  link: string;
};

export type ClearSearchImageLinkActionType = {
  type: typeof MAIN_ACTIONS.CLEAR_SEARCH_IMAGE_LINK;
};

export type MainActionsTypes =
  | SetWhatsPopularFilterActionType
  | SetTrendingFilterActionType
  | SetTrendingTimeFilterActionType
  | SetSearchImageLinkActionType
  | ClearSearchImageLinkActionType;
