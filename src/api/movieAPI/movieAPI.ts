import { instance } from 'api/instance';
import { ExternalLinksType, MoviePageType } from 'store/moviePageStore/types';
import { APIKeyRequestType, LanguageRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

import { CastResponseType } from './types';

export const MovieAPI = {
  getMovie(movieId: string, requestObject: LanguageRequestType) {
    return instance.get<AxiosPagesDataType<MoviePageType>>(`movie/${movieId}`, {
      params: requestObject,
    });
  },

  getExternalLinks(movieId: string, requestObject: APIKeyRequestType) {
    return instance.get<ExternalLinksType>(`movie/${movieId}/external_ids`, {
      params: requestObject,
    });
  },

  getCastData(movieId: string, requestObject: APIKeyRequestType) {
    return instance.get<CastResponseType>(`movie/${movieId}/credits`, {
      params: requestObject,
    });
  },
};
