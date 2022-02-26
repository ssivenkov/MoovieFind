import { instance } from 'api/instance';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';

export const MoviesAPI = {
  getPopularMovies(requestObject: RequestObjectType) {
    return instance.get(`movie/popular`, { params: requestObject });
  },

  getNowPlayingMovies(requestObject: RequestObjectType) {
    return instance.get(`movie/now_playing`, { params: requestObject });
  },

  getTopRatedMovies(requestObject: RequestObjectType) {
    return instance.get(`movie/top_rated`, { params: requestObject });
  },

  getUpcomingMovies(requestObject: RequestObjectType) {
    return instance.get(`movie/upcoming`, { params: requestObject });
  },
};
