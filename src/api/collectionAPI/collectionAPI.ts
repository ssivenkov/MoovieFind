import { instance } from 'api/instance';
import { LanguageRequestType } from 'types/api/requestTypes';

import { CollectionResponseType } from './types';

export const CollectionAPI = {
  getCollection(collectionId: number, requestObject: LanguageRequestType) {
    return instance.get<CollectionResponseType>(`collection/${collectionId}`, {
      params: requestObject,
    });
  },
};
