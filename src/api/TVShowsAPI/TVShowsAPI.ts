import { instance } from 'api/instance';
import { FullRequestType } from 'types/api/requestTypes';

import { GetTVShowsResponseType } from './types';

export const TVShowsAPI = {
  getPopularTVs(requestObject: FullRequestType) {
    return instance.get<GetTVShowsResponseType>('tv/popular', {
      params: requestObject,
    });
  },

  getOnTheAirTVs(requestObject: FullRequestType) {
    return instance.get<GetTVShowsResponseType>('tv/on_the_air', {
      params: requestObject,
    });
  },

  getTopRatedTVs(requestObject: FullRequestType) {
    return instance.get<GetTVShowsResponseType>('tv/top_rated', {
      params: requestObject,
    });
  },

  getAiringTodayTVs(requestObject: FullRequestType) {
    return instance.get<GetTVShowsResponseType>('tv/airing_today', {
      params: requestObject,
    });
  },
};
