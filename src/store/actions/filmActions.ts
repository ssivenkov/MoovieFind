export enum FILMS_ACTIONS {
  SET_FILMS = 'filmsReducer/SET-FILMS',
  SET_CURRENT_PAGE = 'filmsReducer/SET-CURRENT-PAGE',
}

export type FilmsActionsType =
  | ReturnType<typeof setFilms>
  | ReturnType<typeof setCurrentPage>;

export const setFilms = (films: any) =>
  ({ type: FILMS_ACTIONS.SET_FILMS, films } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: FILMS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const);
