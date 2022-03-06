import { CardsCountInOnePage, ONE, ZERO } from 'constants/common';
import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import { TVShowsActionsType } from 'types/actions/TVShowActionsTypes';
import { InitialTVShowsStateType } from 'types/reducers/TVShowsReducerTypes';

const initialTVShowState = {
  TVShowsList: [],
  currentPage: ONE,
  TVShowsCountInOnePage: CardsCountInOnePage,
  totalTVShowsCount: ZERO,
};
export const TVShowsReducer = (
  state: InitialTVShowsStateType = initialTVShowState,
  action: TVShowsActionsType,
): InitialTVShowsStateType => {
  switch (action.type) {
    case TVSHOWS_ACTIONS.SET_TVSHOWS_DATA:
      return {
        ...state,
        TVShowsList: action.TVShowsData.results,
        totalTVShowsCount: action.TVShowsData.total_results,
      };
    case TVSHOWS_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};
