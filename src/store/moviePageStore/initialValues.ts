import { CastResponseType } from 'api/movieAPI/types';

import { ExternalLinksType, MoviePageType } from './types';

export const initialMoviePageValue: MoviePageType = {
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
};

export const initialExternalLinksValue: ExternalLinksType = {
  imdb_id: null,
  facebook_id: null,
  instagram_id: null,
  twitter_id: null,
  id: null,
};

export const initialCastValue: CastResponseType = {
  id: 0,
  cast: [],
  crew: [],
};
