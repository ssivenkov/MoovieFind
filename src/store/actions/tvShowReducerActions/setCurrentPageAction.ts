import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import { TVShowsReducerStateType } from 'store/reducers/tvShowsReducer/types';

type SetCurrentPageActionPayloadType = {
  currentPage: TVShowsReducerStateType['currentPage'];
};

export type SetCurrentPageActionReturnType = {
  type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE;
  payload: SetCurrentPageActionPayloadType;
};

export type SetCurrentPageActionType = (
  payload: SetCurrentPageActionPayloadType,
) => SetCurrentPageActionReturnType;

export const setCurrentPageAction: SetCurrentPageActionType = (
  payload,
): SetCurrentPageActionReturnType => ({
  type: TVSHOWS_ACTIONS.SET_CURRENT_PAGE,
  payload,
});
