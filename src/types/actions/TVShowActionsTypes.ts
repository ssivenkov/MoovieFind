import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export type TVShowsDataResponseType = {
  results: TVShowType[];
  page: number;
  // eslint-disable-next-line camelcase
  total_pages: number;
  // eslint-disable-next-line camelcase
  total_results: number;
};

export type SetTVShowsActionType = {
  type: string;
  TVShowsData: TVShowsDataResponseType;
};

export type SetCurrentPageActionType = {
  type: string;
  currentPage: number;
};

export type TVShowsActionsType = SetTVShowsActionType & SetCurrentPageActionType;
