import { PersonType } from 'store/peopleStore/types';

export type HumanCardPropsType = {
  name: PersonType['name'];
  profilePath: PersonType['profile_path'];
  popularity: PersonType['popularity'];
};
