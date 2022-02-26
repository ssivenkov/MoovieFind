export type PeopleType = {
  adult: boolean;
  gender: number;
  id: number;
  // eslint-disable-next-line camelcase
  known_for: any;
  // eslint-disable-next-line camelcase
  known_for_department: string;
  name: string;
  popularity: number;
  // eslint-disable-next-line camelcase
  profile_path: string;
};

export type InitialPeopleStateType = {
  people: Array<PeopleType>;
  currentPage: number;
};
