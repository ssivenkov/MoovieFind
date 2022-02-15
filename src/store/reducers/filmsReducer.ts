import { FILMS_ACTIONS, FilmsActionsType } from 'store/actions/filmActions';

export type FilmType = {
  adult: false;
  // eslint-disable-next-line camelcase
  backdrop_path: string;
  // eslint-disable-next-line camelcase
  genre_ids: Array<number>;
  id: number;
  // eslint-disable-next-line camelcase
  original_language: string;
  // eslint-disable-next-line camelcase
  original_title: string;
  overview: string;
  popularity: number;
  // eslint-disable-next-line camelcase
  poster_path: string;
  // eslint-disable-next-line camelcase
  release_date: string;
  title: string;
  video: false;
  // eslint-disable-next-line camelcase
  vote_average: number;
  // eslint-disable-next-line camelcase
  vote_count: number;
};

export type InitialFilmsStateType = {
  films: Array<FilmType>;
  currentPage: number;
};

const initialFilmsState = {
  films: [],
  currentPage: 1,
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
