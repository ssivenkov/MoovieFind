import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MovieFilterType, TimeFilterType } from 'types/common/FilterTypes';

export type setWhatsPopularFilterActionType = {
  type: typeof MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER;
  filter: MovieFilterType;
};

export type setTrendingFilterActionType = {
  type: typeof MAIN_ACTIONS.SET_TRENDING_FILTER;
  filter: MovieFilterType;
};

export type setTrendingTimeFilterActionType = {
  type: typeof MAIN_ACTIONS.SET_TRENDING_TIME_FILTER;
  filter: TimeFilterType;
};

export type setSearchImageLinkActionType = {
  type: typeof MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK;
  link: string;
};

export type MainActionsTypes =
  | setWhatsPopularFilterActionType
  | setTrendingFilterActionType
  | setTrendingTimeFilterActionType
  | setSearchImageLinkActionType;
