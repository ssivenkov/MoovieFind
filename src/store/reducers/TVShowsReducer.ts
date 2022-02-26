import { ONE } from 'constants/common';
import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import { TVShowsActionsType } from 'types/actions/TVShowActionsTypes';
import { InitialTVShowsStateType } from 'types/reducers/TVShowsReducerTypes';

const initialTVShowState = {
  TVShows: [],
  currentPage: ONE,
};
export const TVShowsReducer = (
  state: InitialTVShowsStateType = initialTVShowState,
  action: TVShowsActionsType,
): InitialTVShowsStateType => {
  switch (action.type) {
    case TVSHOWS_ACTIONS.SET_TVSHOWS:
      return { ...state, TVShows: action.TVShows };
    default:
      return state;
  }
};
