import { instance } from 'api/instance';
import { MovieCardType } from 'store/movieCardsStore/types';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

export const moviesAPI = {
  getPopular(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<MovieCardType[]>>('movie/popular', {
      params: requestObject,
    });
  },

  getNowPlaying(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<MovieCardType[]>>('movie/now_playing', {
      params: requestObject,
    });
  },

  getTopRated(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<MovieCardType[]>>('movie/top_rated', {
      params: requestObject,
    });
  },

  getUpcoming(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<MovieCardType[]>>('movie/upcoming', {
      params: requestObject,
    });
  },
};
