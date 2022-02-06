export enum MAIN_ACTIONS {
  SET_ERROR_MESSAGE = 'mainReducer/SET-ERROR-MESSAGE',
}

export type MainActionsType = ReturnType<typeof setErrorMessage>;

export const setErrorMessage = (error: boolean, textError: string) =>
  ({
    type: MAIN_ACTIONS.SET_ERROR_MESSAGE,
    error,
    textError,
  } as const);
