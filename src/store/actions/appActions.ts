import { ThunkDispatch } from 'redux-thunk';

import { AppRootStateType } from '../store';

export enum APP_ACTIONS {
  SET_INITIALIZED_SUCCESS = 'appReducer/SET-INITIALIZED-SUCCESS',
}

export type AppActionsType = ReturnType<typeof initializedSuccess>;

const time = 1500;

export const initializedSuccess = () =>
  ({ type: APP_ACTIONS.SET_INITIALIZED_SUCCESS } as const);

export const initializeApp =
  () => (dispatch: ThunkDispatch<AppRootStateType, unknown, AppActionsType>) => {
    setTimeout(() => {
      dispatch(initializedSuccess());
    }, time);
  };
