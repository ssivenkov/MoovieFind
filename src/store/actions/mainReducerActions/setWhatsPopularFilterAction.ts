import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MovieFilterType } from 'types/commonTypes/FilterTypes';

type SetWhatsPopularFilterActionPayloadType = {
  whatsPopularFilter: MovieFilterType;
};

export type SetWhatsPopularFilterActionReturnType = {
  type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER;
  payload: SetWhatsPopularFilterActionPayloadType;
};

export type SetWhatsPopularFilterActionType = (
  payload: SetWhatsPopularFilterActionPayloadType,
) => SetWhatsPopularFilterActionReturnType;

export const setWhatsPopularFilterAction: SetWhatsPopularFilterActionType = (
  payload,
): SetWhatsPopularFilterActionReturnType => ({
  type: MAIN_ACTIONS.SET_WHATS_POPULAR_FILTER,
  payload,
});
