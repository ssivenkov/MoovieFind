import { LATEST_TRAILERS_ACTIONS } from 'store/actions/latestTrailersActions';
import { LatestTrailersActionsTypes } from 'types/actions/latestTrailersActionsTypes';
import { InitialLatestTrailersStateType } from 'types/reducers/latestTrailersReducerType';

const initialLatestTrailersState = {
  latestTrailers: [],
  currentPage: 1,
};

export const latestTrailersReducer = (
  state: InitialLatestTrailersStateType = initialLatestTrailersState,
  action: LatestTrailersActionsTypes,
): InitialLatestTrailersStateType => {
  switch (action.type) {
    case LATEST_TRAILERS_ACTIONS.SET_LATEST_TRAILERS:
      return { ...state, latestTrailers: action.latestTrailersList };
    default:
      return state;
  }
};
