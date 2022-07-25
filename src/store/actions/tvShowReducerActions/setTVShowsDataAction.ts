import { TVSHOWS_ACTIONS } from 'enums/TVShowsEnum';
import { TVShowsDataResponseType } from 'store/reducers/tvShowsReducer/types';

type SetTVShowsDataActionPayloadType = {
  tvShowsData: TVShowsDataResponseType;
};

export type SetTVShowsDataActionReturnType = {
  type: TVSHOWS_ACTIONS.SET_TVSHOWS_DATA;
  payload: SetTVShowsDataActionPayloadType;
};

export type SetTVShowsDataActionType = (
  payload: SetTVShowsDataActionPayloadType,
) => SetTVShowsDataActionReturnType;

export const setTVShowsDataAction: SetTVShowsDataActionType = (
  payload,
): SetTVShowsDataActionReturnType => ({
  type: TVSHOWS_ACTIONS.SET_TVSHOWS_DATA,
  payload,
});
