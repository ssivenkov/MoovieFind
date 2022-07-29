import { GetMoviesResponseInterface } from 'api/MoviesAPI/types';
import { MOVIES_ACTIONS } from 'enums/moviesEnum';

type SetMoviesDataActionPayloadType = {
  moviesData: GetMoviesResponseInterface;
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
