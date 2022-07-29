import { MOVIE_ACTIONS } from 'enums/movieEnum';
import { MovieReducerStateType } from 'store/reducers/movieReducer/types';

import { MovieReducerActionsType } from './types';

const movieReducerState = {
  movieData: {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: null,
    id: 0,
    imdb_id: null,
    original_language: '',
    original_title: '',
    overview: null,
    popularity: 0,
    poster_path: null,
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: null,
    spoken_languages: [],
    status: '',
    tagline: null,
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  externalLinks: [],
};

export const movieReducer = (
  state: MovieReducerStateType = movieReducerState,
  action: MovieReducerActionsType,
): MovieReducerStateType => {
  switch (action.type) {
    case MOVIE_ACTIONS.SET_MOVIE_DATA:
      return {
        ...state,
        movieData: action.payload.movieData,
      };
    case MOVIE_ACTIONS.CLEAR_MOVIE_DATA:
      return {
        ...movieReducerState,
      };
    default:
      return state;
  }
};
