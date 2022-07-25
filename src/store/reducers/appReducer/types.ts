import { SetAppContentInitializeActionReturnType } from 'store/actions/appReducerActions/appContentInitializeAction';
import { SetAppInitializeActionReturnType } from 'store/actions/appReducerActions/setAppInitializeAction';

export type AppReducerStateType = {
  appInitialized: boolean;
  language: string;
  contentInitialized: boolean;
  searchRequest: string;
};

export type AppReducerActionsType =
  | SetAppInitializeActionReturnType
  | SetAppContentInitializeActionReturnType;
