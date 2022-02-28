import { instance } from 'api/instance';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';

export const PeopleAPI = {
  getPeopleData(requestObject: RequestObjectType) {
    return instance.get(`/person/popular`, {
      params: requestObject,
    });
  },
};
