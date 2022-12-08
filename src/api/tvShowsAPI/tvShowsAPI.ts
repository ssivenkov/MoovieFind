import { instance } from 'api/instance';
import { TVShowCardType } from 'store/tvShowCardsStore/types';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

export const tvShowsAPI = {
  getPopular(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<TVShowCardType[]>>('tv/popular', {
      params: requestObject,
    });
  },

  getOnTheAir(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<TVShowCardType[]>>('tv/on_the_air', {
      params: requestObject,
    });
  },

  getTopRated(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<TVShowCardType[]>>('tv/top_rated', {
      params: requestObject,
    });
  },

  getAiringToday(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<TVShowCardType[]>>('tv/airing_today', {
      params: requestObject,
    });
  },
};
