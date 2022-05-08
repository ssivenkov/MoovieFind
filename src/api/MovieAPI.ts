import { instance } from './instance';

import {
  APIKeyRequestObjectType,
  SmallRequestObjectType,
} from 'types/commonTypes/RequestObjectType';

export const MovieAPI = {
  getMovie(movieId: string, requestObject: SmallRequestObjectType) {
    return instance.get(`movie/${movieId}`, { params: requestObject });
  },

  getExternalMovieLinks(movieId: string, requestObject: APIKeyRequestObjectType) {
    return instance.get(`movie/${movieId}/external_ids`, { params: requestObject });
  },
};
