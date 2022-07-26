import { SetAppContentInitializeActionReturnType } from 'store/actions/appReducerActions/appContentInitializeAction';
import { SetAppInitializeActionReturnType } from 'store/actions/appReducerActions/setAppInitializeAction';
import { SetModalTextActionReturnType } from 'store/actions/appReducerActions/setModalTextAction';

export type AppReducerStateType = {
  appInitialized: boolean;
  language: string;
  contentInitialized: boolean;
  searchRequest: string;
  modalText: string;
};

export type AppReducerActionsType =
  | SetAppInitializeActionReturnType
  | SetAppContentInitializeActionReturnType
  | SetModalTextActionReturnType;
