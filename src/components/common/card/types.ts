export type StyledMovieRatePropsType = {
  voteAverage: number;
};

export type StyledPeopleRatePropsType = {
  popularity: number;
};

export type StyledHumanPhotoContentContainerPropsType = {
  nullContent: boolean;
};

export type MovieCardPropsType = {
  movieID: number;
  title: string;
  posterPath: string | null;
  voteAverage: number;
  releaseDate: string;
};

export type ExtraCardPropsType = {
  title: string;
  link: string;
};

export type PeopleCardPropsType = {
  name: string;
  profilePath: string;
  popularity: number;
};
