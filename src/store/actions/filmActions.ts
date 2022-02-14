export enum FILMS_ACTIONS {
  SET_FILMS = 'filmsReducer/SET-FILMS',
}

export type FilmsActionsType = ReturnType<typeof setFilms>;

export const setFilms = (films: any): any =>
  ({ type: FILMS_ACTIONS.SET_FILMS, films } as const);
