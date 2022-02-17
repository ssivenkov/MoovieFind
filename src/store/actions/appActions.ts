export enum APP_ACTIONS {
  SET_APP_INITIALIZED_TRUE = 'appReducer/SET-INITIALIZED-TRUE',
  SET_APP_INITIALIZED_FALSE = 'appReducer/SET-INITIALIZED-FALSE',
  SET_APP_CONTENT_INITIALIZED_TRUE = 'appReducer/SET-APP-CONTENT-INITIALIZED-TRUE',
  SET_APP_CONTENT_INITIALIZED_FALSE = 'appReducer/SET-APP-CONTENT-INITIALIZED-FALSE',
}

export type AppActionsType =
  | ReturnType<typeof appInitializedTrue>
  | ReturnType<typeof appInitializedFalse>
  | ReturnType<typeof appContentInitializedTrue>
  | ReturnType<typeof appContentInitializedFalse>;

export const appInitializedTrue = () =>
  ({ type: APP_ACTIONS.SET_APP_INITIALIZED_TRUE } as const);

export const appInitializedFalse = () =>
  ({ type: APP_ACTIONS.SET_APP_INITIALIZED_FALSE } as const);

export const appContentInitializedTrue = () =>
  ({ type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_TRUE } as const);

export const appContentInitializedFalse = () =>
  ({ type: APP_ACTIONS.SET_APP_CONTENT_INITIALIZED_FALSE } as const);
