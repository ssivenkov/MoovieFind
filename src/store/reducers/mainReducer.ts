import { ZERO } from 'constants/common';
import { MAIN_ACTIONS, MainActionsType } from 'store/actions/mainActions';

const initialMainState = {
  WhatsPopularFilter: ZERO,
  LatestTrailersFilter: ZERO,
  TrendingFilter: ZERO,
  TrendingTimeFilter: ZERO,
};

export type InitialMainStateType = typeof initialMainState;

export const mainReducer = (
  state: InitialMainStateType = initialMainState,
  action: MainActionsType,
): InitialMainStateType => {
  switch (action.type) {
    case MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER:
      return { ...state, WhatsPopularFilter: action.filter };
    case MAIN_ACTIONS.SET_LATEST_TRAILERS_FILTER:
      return { ...state, LatestTrailersFilter: action.filter };
    case MAIN_ACTIONS.SET_TRENDING_FILTER:
      return { ...state, TrendingFilter: action.filter };
    case MAIN_ACTIONS.SET_TRENDING_TIME_FILTER:
      return { ...state, TrendingTimeFilter: action.filter };
    default:
      return state;
  }
};
