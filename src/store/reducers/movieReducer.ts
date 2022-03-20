import { MOVIE_ACTIONS } from 'enums/movieEnum';
import { MovieActionsTypes } from 'types/actions/movieActionsTypes';
import { InitialMovieStateType } from 'types/reducers/movieReducerTypes';

const initialMovieState = {
  movieData: {
    adult: false,
    // eslint-disable-next-line camelcase
    backdrop_path: null,
    // eslint-disable-next-line camelcase
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: null,
    id: 0,
    // eslint-disable-next-line camelcase
    imdb_id: null,
    // eslint-disable-next-line camelcase
    original_language: '',
    // eslint-disable-next-line camelcase
    original_title: '',
    overview: null,
    popularity: 0,
    // eslint-disable-next-line camelcase
    poster_path: null,
    // eslint-disable-next-line camelcase
    production_companies: [],
    // eslint-disable-next-line camelcase
    production_countries: [],
    // eslint-disable-next-line camelcase
    release_date: '',
    revenue: 0,
    runtime: null,
    // eslint-disable-next-line camelcase
    spoken_languages: [],
    status: '',
    tagline: null,
    title: '',
    video: false,
    // eslint-disable-next-line camelcase
    vote_average: 0,
    // eslint-disable-next-line camelcase
    vote_count: 0,
  },
};

export const movieReducer = (
  state: InitialMovieStateType = initialMovieState,
  action: MovieActionsTypes,
): InitialMovieStateType => {
  switch (action.type) {
    case MOVIE_ACTIONS.SET_MOVIE_DATA:
      return {
        ...state,
        movieData: action.movieData,
      };
    case MOVIE_ACTIONS.CLEAR_MOVIE_DATA:
      return {
        ...initialMovieState,
      };
    default:
      return state;
  }
};
