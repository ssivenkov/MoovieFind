import { PersonType } from 'store/reducers/peopleReducer/types';
import { ResponseType } from 'types/api/responseType';

export type GetPeopleDataResponseType = ResponseType<PersonType[]>;
