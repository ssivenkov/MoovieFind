import { PeopleType } from 'store/reducers/peopleReducer/types';

export type PeopleSectionPropsType = {
  peopleList: Array<PeopleType>;
  sectionTitle: string;
};
