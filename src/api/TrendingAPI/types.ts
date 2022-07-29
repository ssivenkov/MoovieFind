import { MovieType } from 'store/reducers/moviesReducer/types';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';
import { ResponseType } from 'types/api/responseType';

export type GetTrendingMoviesResponseType = ResponseType<MovieType[]>;

export type GetTrendingTVShowsResponseType = ResponseType<TVShowType[]>;
