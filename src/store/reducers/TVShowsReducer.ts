import { TVSHOWS_ACTIONS, TVShowsActionsType } from 'store/actions/TVShowActions';

export type TVShowType = {
  // eslint-disable-next-line camelcase
  poster_path: string;
  popularity: number;
  id: number;
  // eslint-disable-next-line camelcase
  backdrop_path: string;
  // eslint-disable-next-line camelcase
  vote_average: number;
  overview: string;
  // eslint-disable-next-line camelcase
  first_air_date: string;
  // eslint-disable-next-line camelcase
  origin_country: Array<string>;
  // eslint-disable-next-line camelcase
  genre_ids: Array<number>;
  // eslint-disable-next-line camelcase
  original_language: string;
  // eslint-disable-next-line camelcase
  vote_count: number;
  name: string;
  // eslint-disable-next-line camelcase
  original_name: string;
};

export type InitialTVShowsStateType = {
  TVShows: Array<TVShowType>;
  currentPage: number;
};

const initialTVShowState = {
  TVShows: [],
  currentPage: 1,
};

export const TVShowsReducer = (
  state: InitialTVShowsStateType = initialTVShowState,
  action: TVShowsActionsType,
): InitialTVShowsStateType => {
  switch (action.type) {
    case TVSHOWS_ACTIONS.SET_TVSHOWS:
      return { ...state, TVShows: action.TVShows };
    default:
      return state;
  }
};
