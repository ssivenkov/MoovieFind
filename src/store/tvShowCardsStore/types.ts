import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesResponse } from 'types/api/responseTypes';
import { NullableType } from 'types/common/nullableType';

export type TVShowCardType = {
  poster_path: NullableType<string>;
  popularity: number;
  id: number;
  backdrop_path: NullableType<string>;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};

export type GetTVShowsMethodType = (
  requestObject: FullRequestType,
) => Promise<AxiosPagesResponse<TVShowCardType[]>>;
