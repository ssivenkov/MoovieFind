import { instance } from './instance';

import { SmallRequestObjectType } from 'types/commonTypes/RequestObjectType';

export const MovieAPI = {
  getMovie(movieId: string, requestObject: SmallRequestObjectType) {
    return instance.get(`movie/${movieId}`, { params: requestObject });
  },
};
