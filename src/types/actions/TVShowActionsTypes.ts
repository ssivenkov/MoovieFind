import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export type SetTVShowsActionType = {
  type: string;
  TVShows: Array<TVShowType>;
};

export type SetCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type TVShowsActionsType = SetTVShowsActionType & SetCurrentPageActionType;
