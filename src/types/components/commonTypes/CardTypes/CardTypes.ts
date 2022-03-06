export interface StyledMovieRatePropsType {
  voteAverage: number;
}

export interface StyledPeopleRatePropsType {
  popularity: number;
}

export interface StyledHumanPhotoContentContainerPropsType {
  nullContent: boolean;
}

export type MovieCardPropsType = {
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
