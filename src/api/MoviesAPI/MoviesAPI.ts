import { instance } from 'api/instance';
import { FullRequestType } from 'types/api/requestTypes';

import { GetMoviesResponseInterface, GetMoviesResponseType } from './types';

export const MoviesAPI = {
  getPopular(requestObject: FullRequestType) {
    return instance.get<GetMoviesResponseType>('movie/popular', {
      params: requestObject,
    });
  },

  getNowPlaying(requestObject: FullRequestType) {
    return instance.get<GetMoviesResponseInterface>('movie/now_playing', {
      params: requestObject,
    });
  },

  getTopRated(requestObject: FullRequestType) {
    return instance.get<GetMoviesResponseType>('movie/top_rated', {
      params: requestObject,
    });
  },

  getUpcoming(requestObject: FullRequestType) {
    return instance.get<GetMoviesResponseInterface>('movie/upcoming', {
      params: requestObject,
    });
  },
};
