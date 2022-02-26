export type MovieType = {
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

export type InitialMoviesStateType = {
  movies: Array<MovieType>;
  currentPage: number;
};
