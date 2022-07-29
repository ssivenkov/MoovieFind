import { instance } from 'api/instance';
import { FullRequestType } from 'types/api/requestTypes';

import { GetPeopleDataResponseType } from './types';

export const PeopleAPI = {
  getPeopleData(requestObject: FullRequestType) {
    return instance.get<GetPeopleDataResponseType>('/person/popular', {
      params: requestObject,
    });
  },
};
