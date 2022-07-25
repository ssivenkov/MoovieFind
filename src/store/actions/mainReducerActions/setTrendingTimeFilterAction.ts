import { MAIN_ACTIONS } from 'enums/mainEnum';
import { TimeFilterType } from 'types/commonTypes/FilterTypes';

type SetTrendingTimeFilterActionPayloadType = {
  trendingTimeFilter: TimeFilterType;
};

export type SetTrendingTimeFilterActionReturnType = {
  type: MAIN_ACTIONS.SET_TRENDING_TIME_FILTER;
  payload: SetTrendingTimeFilterActionPayloadType;
};

export type SetTrendingTimeFilterActionType = (
  payload: SetTrendingTimeFilterActionPayloadType,
) => SetTrendingTimeFilterActionReturnType;

export const setTrendingTimeFilterAction: SetTrendingTimeFilterActionType = (
  payload,
): SetTrendingTimeFilterActionReturnType => ({
  type: MAIN_ACTIONS.SET_TRENDING_TIME_FILTER,
  payload,
});
