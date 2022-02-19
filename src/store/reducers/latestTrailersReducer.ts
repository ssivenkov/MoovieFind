import {
  LATEST_TRAILERS_ACTIONS,
  LatestTrailersActionsType,
} from 'store/actions/latestTrailersActions';

export type LatestTrailerType = {
  // eslint-disable-next-line camelcase
  poster_path: string;
  adult: false;
  overview: string;
  // eslint-disable-next-line camelcase
  release_date: string;
  // eslint-disable-next-line camelcase
  genre_ids: Array<number>;
  id: number;
  // eslint-disable-next-line camelcase
  original_title: string;
  // eslint-disable-next-line camelcase
  original_language: string;
  title: string;
  // eslint-disable-next-line camelcase
  backdrop_path: string;
  popularity: number;
  // eslint-disable-next-line camelcase
  vote_count: number;
  video: false;
  // eslint-disable-next-line camelcase
  vote_average: number;
};

export type InitialLatestTrailersStateType = {
  latestTrailers: Array<LatestTrailerType>;
  currentPage: number;
};

const initialLatestTrailersState = {
  latestTrailers: [],
  currentPage: 1,
};

export const latestTrailersReducer = (
  state: InitialLatestTrailersStateType = initialLatestTrailersState,
  action: LatestTrailersActionsType,
): InitialLatestTrailersStateType => {
  switch (action.type) {
    case LATEST_TRAILERS_ACTIONS.SET_LATEST_TRAILERS:
      return { ...state, latestTrailers: action.latestTrailersList };
    default:
      return state;
  }
};
