import { instance } from 'api/instance';
import { PersonType } from 'store/peopleStore/types';
import { FullRequestType } from 'types/api/requestTypes';
import { AxiosPagesDataType } from 'types/api/responseTypes';

export const PeopleAPI = {
  getPopular(requestObject: FullRequestType) {
    return instance.get<AxiosPagesDataType<PersonType[]>>('/person/popular', {
      params: requestObject,
    });
  },
};
