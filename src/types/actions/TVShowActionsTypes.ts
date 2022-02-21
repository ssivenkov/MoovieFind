import { TVShowType } from 'types/reducers/TVShowsReducerType';

export type setTVShowsActionType = {
  type: string;
  TVShows: Array<TVShowType>;
};

export type setCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type TVShowsActionsType = setTVShowsActionType & setCurrentPageActionType;
