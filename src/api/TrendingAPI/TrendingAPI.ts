import { instance } from 'api/instance';
import { FullRequestType } from 'types/api/requestTypes';

import { GetTrendingMoviesResponseType, GetTrendingTVShowsResponseType } from './types';

export const TrendingAPI = {
  getTrendingMovies(requestObject: FullRequestType, timeWindow: string) {
    return instance.get<GetTrendingMoviesResponseType>(`/trending/movie/${timeWindow}`, {
      params: requestObject,
    });
  },

  getTrendingTVShows(requestObject: FullRequestType, timeWindow: string) {
    return instance.get<GetTrendingTVShowsResponseType>(`/trending/tv/${timeWindow}`, {
      params: requestObject,
    });
  },
};
