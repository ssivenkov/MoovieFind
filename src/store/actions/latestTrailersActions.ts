import { setLatestTrailersActionType } from 'types/actions/latestTrailersActionsTypes';

export enum LATEST_TRAILERS_ACTIONS {
  SET_LATEST_TRAILERS = 'latestTrailersReducer/SET_LATEST_TRAILERS',
}

export const setLatestTrailers = (latestTrailersList: any): setLatestTrailersActionType =>
  ({ type: LATEST_TRAILERS_ACTIONS.SET_LATEST_TRAILERS, latestTrailersList } as const);
