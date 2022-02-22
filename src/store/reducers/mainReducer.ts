import { TV, DAY } from 'constants/common';
import { MAIN_ACTIONS } from 'store/actions/mainActions';
import { MainActionsTypes } from 'types/actions/mainActionsTypes';
import { MovieFilterType, TimeFilterType } from 'types/common/FilterTypes';
import { InitialMainStateType } from 'types/reducers/mainReducerType';

const initialMainState = {
  WhatsPopularFilter: TV as MovieFilterType,
  TrendingFilter: TV as MovieFilterType,
  TrendingTimeFilter: DAY as TimeFilterType,
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
    default:
      return state;
  }
};
