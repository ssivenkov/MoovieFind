export enum LATEST_TRAILERS_ACTIONS {
  SET_LATEST_TRAILERS = 'latestTrailersReducer/SET-LATEST-TRAILERS',
}

export type LatestTrailersActionsType = ReturnType<typeof setLatestTrailers>;

export const setLatestTrailers = (latestTrailersList: any) =>
  ({ type: LATEST_TRAILERS_ACTIONS.SET_LATEST_TRAILERS, latestTrailersList } as const);
