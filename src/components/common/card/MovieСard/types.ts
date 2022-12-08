import { NullableType } from 'types/common/nullableType';

export type MovieCardPropsType = {
  movieID: number;
  title: string;
  posterPath: NullableType<string>;
  voteAverage: number;
  releaseDate: string;
};
