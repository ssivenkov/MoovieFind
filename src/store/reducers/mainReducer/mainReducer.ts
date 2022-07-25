import { TV, DAY, EMPTY_STRING } from 'constants/common';
import { MAIN_ACTIONS } from 'enums/mainEnum';
import {
  MainReducerActionsType,
  MainReducerStateType,
} from 'store/reducers/mainReducer/types';

const mainReducerState: MainReducerStateType = {
  whatsPopularFilter: TV,
  trendingFilter: TV,
  trendingTimeFilter: DAY,
  searchImageLink: EMPTY_STRING,
};

export const mainReducer = (
  state: MainReducerStateType = mainReducerState,
  action: MainReducerActionsType,
): MainReducerStateType => {
  switch (action.type) {
    case MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER:
      return { ...state, whatsPopularFilter: action.payload.whatsPopularFilter };
    case MAIN_ACTIONS.SET_TRENDING_FILTER:
      return { ...state, trendingFilter: action.payload.trendingFilter };
    case MAIN_ACTIONS.SET_TRENDING_TIME_FILTER:
      return { ...state, trendingTimeFilter: action.payload.trendingTimeFilter };
    case MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK:
      return { ...state, searchImageLink: action.payload.searchImageLink };
    default:
      return state;
  }
};
