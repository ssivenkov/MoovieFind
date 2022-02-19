import { instance } from 'api/instance';
import { RequestObjectType } from 'types/RequestObjectType';

export const TrendingAPI = {
  getTrendingMovies(requestObject: RequestObjectType) {
    return instance.get(`movie/popular`, { params: requestObject });
  },

  getTrendingTVShows(requestObject: RequestObjectType) {
    return instance.get(`movie/popular`, { params: requestObject });
  },
};
