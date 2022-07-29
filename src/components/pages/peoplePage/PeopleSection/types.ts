import { PersonType } from 'store/reducers/peopleReducer/types';

export type PeopleSectionPropsType = {
  peopleList: PersonType[];
  sectionTitle: string;
};
