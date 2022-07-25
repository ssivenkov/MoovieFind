import { CardsCountInOnePage, ONE, ZERO } from 'constants/common';
import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import {
  TVShowsReducerActionsType,
  TVShowsReducerStateType,
} from 'store/reducers/tvShowsReducer/types';

const tvShowReducerState = {
  tvShowsList: [],
  currentPage: ONE,
  tvShowsCountInOnePage: CardsCountInOnePage,
  totalTVShowsCount: ZERO,
};
export const tvShowsReducer = (
  state: TVShowsReducerStateType = tvShowReducerState,
  action: TVShowsReducerActionsType,
): TVShowsReducerStateType => {
  switch (action.type) {
    case TVSHOWS_ACTIONS.SET_TVSHOWS_DATA:
      return {
        ...state,
        tvShowsList: action.payload.tvShowsData.results,
        totalTVShowsCount: action.payload.tvShowsData.total_results,
      };
    case TVSHOWS_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
