import { instance } from 'api/instance';
import { RequestObjectType } from 'types/common/RequestObjectType';

export const TrendingAPI = {
  getTrendingMovies(requestObject: RequestObjectType, timeWindow: string) {
    return instance.get(`/trending/movie/${timeWindow}`, {
      params: requestObject,
    });
  },

  getTrendingTVShows(requestObject: RequestObjectType, timeWindow: string) {
    return instance.get(`/trending/tv/${timeWindow}`, { params: requestObject });
  },
};
