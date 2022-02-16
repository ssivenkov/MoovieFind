import { instance } from 'api/instance';
import { requestObjectType } from 'components/RoutesContainer/RoutesContainer';

export const TVShowsAPI = {
  getPopularTVs(requestObject: requestObjectType) {
    return instance.get(`tv/popular`, { params: requestObject });
  },

  getOnTheAirTVs(requestObject: requestObjectType) {
    return instance.get(`tv/on_the_air`, { params: requestObject });
  },

  getTopRatedTVs(requestObject: requestObjectType) {
    return instance.get(`tv/top_rated`, { params: requestObject });
  },

  getAiringTodayTVs(requestObject: requestObjectType) {
    return instance.get(`tv/airing_today`, { params: requestObject });
  },
};
