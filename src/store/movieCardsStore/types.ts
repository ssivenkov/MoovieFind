import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesResponse } from 'types/api/responseTypes';
import { NullableType } from 'types/common/nullableType';

export type MovieCardType = {
  poster_path: NullableType<string>;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: NullableType<string>;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type GetMoviesMethodType = (
  requestObject: FullRequestType,
) => Promise<AxiosPagesResponse<MovieCardType[]>>;
