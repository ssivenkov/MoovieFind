import { APP_ACTIONS } from 'enums/appEnum';
import { AppReducerStateType } from 'store/reducers/appReducer/types';

type SetAppInitializeActionPayloadType = {
  appInitialized: AppReducerStateType['appInitialized'];
};

export type SetAppInitializeActionReturnType = {
  type: APP_ACTIONS.SET_APP_INITIALIZE;
  payload: SetAppInitializeActionPayloadType;
};

export type SetAppInitializeActionType = (
  payload: SetAppInitializeActionPayloadType,
) => SetAppInitializeActionReturnType;

export const setAppInitializeAction: SetAppInitializeActionType = (
  payload,
): SetAppInitializeActionReturnType => ({
  type: APP_ACTIONS.SET_APP_INITIALIZE,
  payload,
});
