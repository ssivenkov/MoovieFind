import { MovieDataType } from 'store/reducers/movieReducer/types';
import { NullableType } from 'types/common/nullableType';

export type GetMovieResponseType = MovieDataType;

export type GetExternalLinksResponseType = {
  imdb_id?: NullableType<string>;
  facebook_id?: NullableType<string>;
  instagram_id?: NullableType<string>;
  twitter_id?: NullableType<string>;
  id?: number;
};
