import { instance } from 'api/instance';
import { requestObjectType } from 'components/RoutesContainer/RoutesContainer';

export const MoviesAPI = {
  getPopularMovies(requestObject: requestObjectType) {
    return instance.get(`movie/popular`, { params: requestObject });
  },

  getNowPlayingMovies(requestObject: requestObjectType) {
    return instance.get(`movie/now_playing`, { params: requestObject });
  },

  getTopRatedMovies(requestObject: requestObjectType) {
    return instance.get(`movie/top_rated`, { params: requestObject });
  },

  getUpcomingMovies(requestObject: requestObjectType) {
    return instance.get(`movie/upcoming`, { params: requestObject });
  },
};
