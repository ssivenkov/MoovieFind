import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MovieFilterType } from 'types/commonTypes/FilterTypes';

type SetTrendingFilterActionPayloadType = {
  trendingFilter: MovieFilterType;
};

export type SetTrendingFilterActionReturnType = {
  type: MAIN_ACTIONS.SET_TRENDING_FILTER;
  payload: SetTrendingFilterActionPayloadType;
};

export type SetTrendingFilterActionType = (
  payload: SetTrendingFilterActionPayloadType,
) => SetTrendingFilterActionReturnType;

export const setTrendingFilterAction: SetTrendingFilterActionType = (
  payload,
): SetTrendingFilterActionReturnType => ({
  type: MAIN_ACTIONS.SET_TRENDING_FILTER,
  payload,
});
