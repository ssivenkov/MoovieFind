import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import { MoviesDataResponseType } from 'store/reducers/moviesReducer/types';

type SetMoviesDataActionPayloadType = {
  moviesData: MoviesDataResponseType;
};

export type SetMoviesDataActionReturnType = {
  type: MOVIES_ACTIONS.SET_MOVIES_DATA;
  payload: SetMoviesDataActionPayloadType;
};

export type SetMoviesDataActionType = (
  payload: SetMoviesDataActionPayloadType,
) => SetMoviesDataActionReturnType;

export const setMoviesDataAction: SetMoviesDataActionType = (
  payload,
): SetMoviesDataActionReturnType => ({
  type: MOVIES_ACTIONS.SET_MOVIES_DATA,
  payload,
});
