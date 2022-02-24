import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnums';
import { TVShowsActionsType } from 'types/actions/TVShowActionsTypes';
import { InitialTVShowsStateType } from 'types/reducers/TVShowsReducerType';

const initialTVShowState = {
  TVShows: [],
  currentPage: 1,
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
