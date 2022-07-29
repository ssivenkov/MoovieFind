import { GetTVShowsResponseType } from 'api/TVShowsAPI/types';
import { TV_SHOWS_ACTIONS } from 'enums/TVShowsEnum';

type SetTVShowsDataActionPayloadType = {
  tvShowsData: GetTVShowsResponseType;
};

export type SetTVShowsDataActionReturnType = {
  type: TV_SHOWS_ACTIONS.SET_TV_SHOWS_DATA;
  payload: SetTVShowsDataActionPayloadType;
};

export type SetTVShowsDataActionType = (
  payload: SetTVShowsDataActionPayloadType,
) => SetTVShowsDataActionReturnType;

export const setTVShowsDataAction: SetTVShowsDataActionType = (
  payload,
): SetTVShowsDataActionReturnType => ({
  type: TV_SHOWS_ACTIONS.SET_TV_SHOWS_DATA,
  payload,
});
