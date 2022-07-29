import { TVShowType } from 'store/reducers/tvShowsReducer/types';
import { ResponseType } from 'types/api/responseType';

export type GetTVShowsResponseType = ResponseType<TVShowType[]>;
