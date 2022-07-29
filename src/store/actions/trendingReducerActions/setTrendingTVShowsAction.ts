import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import { TrendingReducerStateType } from 'store/reducers/trendingReducer/types';

type SetTrendingTVShowsActionPayloadType = {
  trendingTVShows: TrendingReducerStateType['trendingTVShows'];
};

export type SetTrendingTVShowsActionReturnType = {
  type: TRENDING_ACTIONS.SET_TRENDING_TVSHOWS;
  payload: SetTrendingTVShowsActionPayloadType;
};

export type SetTrendingTVShowsActionType = (
  payload: SetTrendingTVShowsActionPayloadType,
) => SetTrendingTVShowsActionReturnType;

export const setTrendingTVShowsAction: SetTrendingTVShowsActionType = (
  payload,
): SetTrendingTVShowsActionReturnType => ({
  type: TRENDING_ACTIONS.SET_TRENDING_TVSHOWS,
  payload,
});
