import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import { MoviesReducerStateType } from 'store/reducers/moviesReducer/types';

type SetCurrentPageActionPayloadType = {
  currentPage: MoviesReducerStateType['currentPage'];
};

export type SetCurrentPageActionReturnType = {
  type: MOVIES_ACTIONS.SET_CURRENT_PAGE;
  payload: SetCurrentPageActionPayloadType;
};

export type SetCurrentPageActionType = (
  payload: SetCurrentPageActionPayloadType,
) => SetCurrentPageActionReturnType;

export const setCurrentPageAction: SetCurrentPageActionType = (
  payload,
): SetCurrentPageActionReturnType => ({
  type: MOVIES_ACTIONS.SET_CURRENT_PAGE,
  payload,
});
