import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';

type SetTrendingTVShowsActionPayloadType = {
  trendingTVShows: TVShowType[];
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
