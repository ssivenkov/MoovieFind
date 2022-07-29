import { instance } from 'api/instance';
import { APIKeyRequestType, LanguageRequestType } from 'types/api/requestTypes';

import { GetExternalLinksResponseType, GetMovieResponseType } from './types';

export const MovieAPI = {
  getMovie(movieId: string, requestObject: LanguageRequestType) {
    return instance.get<GetMovieResponseType>(`movie/${movieId}`, {
      params: requestObject,
    });
  },

  getExternalLinks(movieId: string, requestObject: APIKeyRequestType) {
    return instance.get<GetExternalLinksResponseType>(`movie/${movieId}/external_ids`, {
      params: requestObject,
    });
  },
};
