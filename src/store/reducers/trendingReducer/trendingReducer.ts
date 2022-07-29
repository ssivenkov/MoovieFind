import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import {
  TrendingReducerStateType,
  TrendingReducerActionsType,
} from 'store/reducers/trendingReducer/types';

const trendingReducerState = {
  trendingMovies: [],
  trendingTVShows: [],
  sliderPage: 1,
};

export const trendingReducer = (
  state: TrendingReducerStateType = trendingReducerState,
  action: TrendingReducerActionsType,
): TrendingReducerStateType => {
  switch (action.type) {
    case TRENDING_ACTIONS.SET_TRENDING_MOVIES:
      return { ...state, trendingMovies: action.payload.trendingMovies };
    case TRENDING_ACTIONS.SET_TRENDING_TVSHOWS:
      return { ...state, trendingTVShows: action.payload.trendingTVShows };
    default:
      return state;
  }
};
