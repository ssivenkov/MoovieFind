import { APP_ACTIONS } from 'enums/appEnum';
import { AppReducerStateType } from 'store/reducers/appReducer/types';

type SetAppContentInitializeActionPayloadType = {
  contentInitialized: AppReducerStateType['contentInitialized'];
};

export type SetAppContentInitializeActionReturnType = {
  type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZE;
  payload: SetAppContentInitializeActionPayloadType;
};

export type SetAppContentInitializeActionType = (
  payload: SetAppContentInitializeActionPayloadType,
) => SetAppContentInitializeActionReturnType;

export const setAppContentInitializeAction: SetAppContentInitializeActionType = (
  payload,
): SetAppContentInitializeActionReturnType => ({
  type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZE,
  payload,
});
