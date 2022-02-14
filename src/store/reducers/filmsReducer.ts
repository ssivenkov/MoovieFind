import { FILMS_ACTIONS, FilmsActionsType } from 'store/actions/filmActions';

export type InitialFilmsStateType = {
  films: any;
};

const initialFilmsState = {
  films: [],
};

export const filmsReducer = (
  state: InitialFilmsStateType = initialFilmsState,
  action: FilmsActionsType,
): InitialFilmsStateType => {
  switch (action.type) {
    case FILMS_ACTIONS.SET_FILMS:
      return { ...state, films: action.films };
    default:
      return state;
  }
};
