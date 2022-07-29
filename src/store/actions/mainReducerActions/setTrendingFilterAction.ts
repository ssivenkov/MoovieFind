import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MainReducerStateType } from 'store/reducers/mainReducer/types';

type SetTrendingFilterActionPayloadType = {
  trendingFilter: MainReducerStateType['trendingFilter'];
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
