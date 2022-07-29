import { CARDS_PER_PAGE } from 'constants/common';

import { TV_SHOWS_ACTIONS } from 'enums/TVShowsEnum';
import {
  TVShowsReducerActionsType,
  TVShowsReducerStateType,
} from 'store/reducers/tvShowsReducer/types';

const tvShowReducerState = {
  tvShowsList: [],
  currentPage: 1,
  tvShowsCountInOnePage: CARDS_PER_PAGE,
  totalTVShowsCount: 0,
};

export const tvShowsReducer = (
  state: TVShowsReducerStateType = tvShowReducerState,
  action: TVShowsReducerActionsType,
): TVShowsReducerStateType => {
  switch (action.type) {
    case TV_SHOWS_ACTIONS.SET_TV_SHOWS_DATA:
      return {
        ...state,
        tvShowsList: action.payload.tvShowsData.results,
        totalTVShowsCount: action.payload.tvShowsData.total_results,
      };
    case TV_SHOWS_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
