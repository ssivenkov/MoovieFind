import { instance } from 'api/instance';
import { MoviePageType } from 'store/moviePageStore/types';
import { TVShowCardType } from 'store/tvShowCardsStore/types';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

export const trendingAPI = {
  getTrendingTVShows(requestObject: FullRequestType, timeWindow: string) {
    return instance.get<AxiosPagesDataType<TVShowCardType[]>>(
      `/trending/tv/${timeWindow}`,
      {
        params: requestObject,
      },
    );
  },

  getTrendingMovies(requestObject: FullRequestType, timeWindow: string) {
    return instance.get<AxiosPagesDataType<MoviePageType[]>>(
      `/trending/movie/${timeWindow}`,
      {
        params: requestObject,
      },
    );
  },
};
