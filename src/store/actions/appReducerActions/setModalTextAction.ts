import { APP_ACTIONS } from 'enums/appEnum';
import { AppReducerStateType } from 'store/reducers/appReducer/types';

type SetModalTextActionPayloadType = {
  modalText: AppReducerStateType['modalText'];
};

export type SetModalTextActionReturnType = {
  type: APP_ACTIONS.SET_MODAL_TEXT;
  payload: SetModalTextActionPayloadType;
};

export type SetModalTextActionType = (
  payload: SetModalTextActionPayloadType,
) => SetModalTextActionReturnType;

export const setModalTextAction: SetModalTextActionType = (
  payload,
): SetModalTextActionReturnType => ({
  type: APP_ACTIONS.SET_MODAL_TEXT,
  payload,
});
