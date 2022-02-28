import { APP_ACTIONS } from 'enums/appEnum';
import {
  AppContentInitializedFalseActionType,
  AppContentInitializedTrueActionType,
  AppInitializedFalseActionType,
  AppInitializedTrueActionType,
} from 'types/actions/appActionsTypes';

export const appInitializedTrue = (): AppInitializedTrueActionType =>
  ({ type: APP_ACTIONS.SET_APP_INITIALIZED_TRUE } as const);

export const appInitializedFalse = (): AppInitializedFalseActionType =>
  ({ type: APP_ACTIONS.SET_APP_INITIALIZED_FALSE } as const);

export const appContentInitializedTrue = (): AppContentInitializedTrueActionType =>
  ({ type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_TRUE } as const);

export const appContentInitializedFalse = (): AppContentInitializedFalseActionType =>
  ({ type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_FALSE } as const);
