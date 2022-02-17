import { MAIN_ACTIONS, MainActionsType } from '../actions/mainActions';

const initialMainState = {
  WhatsPopularFilter: 0,
  FreeToWatchFilter: 0,
  LatestTrailersFilter: 0,
  TrendingFilter: 0,
};

export type InitialMainStateType = typeof initialMainState;

export const mainReducer = (
  state: InitialMainStateType = initialMainState,
  action: MainActionsType,
): InitialMainStateType => {
  switch (action.type) {
    case MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER:
      return { ...state, WhatsPopularFilter: action.filter };
    case MAIN_ACTIONS.SET_FREE_TO_WATCH_FILTER:
      return { ...state, WhatsPopularFilter: action.filter };
    case MAIN_ACTIONS.SET_LATEST_FILTER:
      return { ...state, WhatsPopularFilter: action.filter };
    case MAIN_ACTIONS.SET_TRENDING_FILTER:
      return { ...state, WhatsPopularFilter: action.filter };
    default:
      return state;
  }
};
