import { TVShowType } from 'store/reducers/tvShowsReducer/types';

export type TVShowsSectionPropsType = {
  TVShowsList: Array<TVShowType>;
  sectionTitle: string;
};
