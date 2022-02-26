export interface StyledMovieRatePropsType {
  voteAverage: number;
}

export interface StyledPeopleRatePropsType {
  popularity: number;
}

export type MovieCardPropsType = {
  title: string;
  posterPath: string;
  voteAverage: number;
  releaseDate: string;
};

export type ExtraCardPropsType = {
  title: string;
  link: string;
};

export type PeopleCardPropsType = {
  name: string;
  // eslint-disable-next-line camelcase
  profile_path: string;
  popularity: number;
};
