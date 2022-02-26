import { instance } from 'api/instance';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';

export const TVShowsAPI = {
  getPopularTVs(requestObject: RequestObjectType) {
    return instance.get(`tv/popular`, { params: requestObject });
  },

  getOnTheAirTVs(requestObject: RequestObjectType) {
    return instance.get(`tv/on_the_air`, { params: requestObject });
  },

  getTopRatedTVs(requestObject: RequestObjectType) {
    return instance.get(`tv/top_rated`, { params: requestObject });
  },

  getAiringTodayTVs(requestObject: RequestObjectType) {
    return instance.get(`tv/airing_today`, { params: requestObject });
  },
};
