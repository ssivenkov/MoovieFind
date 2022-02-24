import { APP_ACTIONS } from 'enums/appEnums';
import {
  appContentInitializedFalseActionType,
  appContentInitializedTrueActionType,
  appInitializedFalseActionType,
  appInitializedTrueActionType,
} from 'types/actions/appActionsTypes';

export const appInitializedTrue = (): appInitializedTrueActionType =>
  ({ type: APP_ACTIONS.SET_APP_INITIALIZED_TRUE } as const);

export const appInitializedFalse = (): appInitializedFalseActionType =>
  ({ type: APP_ACTIONS.SET_APP_INITIALIZED_FALSE } as const);

export const appContentInitializedTrue = (): appContentInitializedTrueActionType =>
  ({ type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_TRUE } as const);

export const appContentInitializedFalse = (): appContentInitializedFalseActionType =>
  ({ type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_FALSE } as const);
