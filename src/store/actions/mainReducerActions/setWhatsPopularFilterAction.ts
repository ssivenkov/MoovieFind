import { MAIN_ACTIONS } from 'enums/mainEnum';
import { MainReducerStateType } from 'store/reducers/mainReducer/types';

type SetWhatsPopularFilterActionPayloadType = {
  whatsPopularFilter: MainReducerStateType['whatsPopularFilter'];
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
