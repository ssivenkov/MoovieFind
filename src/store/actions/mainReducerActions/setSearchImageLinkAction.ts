import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MainReducerStateType } from 'store/reducers/mainReducer/types';

type SetSearchImageLinkActionPayloadType = {
  searchImageLink: MainReducerStateType['searchImageLink'];
};

export type SetSearchImageLinkActionReturnType = {
  type: MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK;
  payload: SetSearchImageLinkActionPayloadType;
};

export type SetSearchImageLinkActionType = (
  payload: SetSearchImageLinkActionPayloadType,
) => SetSearchImageLinkActionReturnType;

export const setSearchImageLinkAction: SetSearchImageLinkActionType = (
  payload,
): SetSearchImageLinkActionReturnType => ({
  type: MAIN_ACTIONS.SET_SEARCH_IMAGE_LINK,
  payload,
});
