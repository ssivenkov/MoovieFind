import { TV, DAY } from 'constants/common';
import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MainActionsTypes } from 'types/actions/mainActionsTypes';
import { InitialMainStateType } from 'types/reducers/mainReducerType';

const initialMainState: InitialMainStateType = {
  WhatsPopularFilter: TV,
  TrendingFilter: TV,
  TrendingTimeFilter: DAY,
  SearchImageLink: '',
};

export const mainReducer = (
  state: InitialMainStateType = initialMainState,
  action: MainActionsTypes,
): InitialMainStateType => {
  switch (action.type) {
    case MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER:
      return { ...state, WhatsPopularFilter: action.filter };
    case MAIN_ACTIONS.SET_TRENDING_FILTER:
      return { ...state, TrendingFilter: action.filter };
    case MAIN_ACTIONS.SET_TRENDING_TIME_FILTER:
      return { ...state, TrendingTimeFilter: action.filter };
    case MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK:
      return { ...state, SearchImageLink: action.link };
    default:
      return state;
  }
};
