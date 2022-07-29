import { MovieType } from 'store/reducers/moviesReducer/types';
import { ResponseType } from 'types/api/responseType';

export type GetMoviesResponseType = ResponseType<MovieType[]>;

export interface GetMoviesResponseInterface extends GetMoviesResponseType {
  dates?: {
    maximum?: string;
    minimum?: string;
  };
}
