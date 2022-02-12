export enum APP_ACTIONS {
  SET_INITIALIZED_SUCCESS = 'appReducer/SET-INITIALIZED-SUCCESS',
}

export type AppActionsType = ReturnType<typeof initializedSuccess>;

export const initializedSuccess = () =>
  ({ type: APP_ACTIONS.SET_INITIALIZED_SUCCESS } as const);
