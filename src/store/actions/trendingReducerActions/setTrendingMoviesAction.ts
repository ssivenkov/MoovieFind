import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import { TrendingReducerStateType } from 'store/reducers/trendingReducer/types';

type SetTrendingMoviesActionPayloadType = {
  trendingMovies: TrendingReducerStateType['trendingMovies'];
};

export type SetTrendingMoviesActionReturnType = {
  type: TRENDING_ACTIONS.SET_TRENDING_MOVIES;
  payload: SetTrendingMoviesActionPayloadType;
};

export type SetTrendingMoviesActionType = (
  payload: SetTrendingMoviesActionPayloadType,
) => SetTrendingMoviesActionReturnType;

export const setTrendingMoviesAction: SetTrendingMoviesActionType = (
  payload,
): SetTrendingMoviesActionReturnType => ({
  type: TRENDING_ACTIONS.SET_TRENDING_MOVIES,
  payload,
});
