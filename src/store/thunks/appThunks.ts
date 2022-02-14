import { ThunkDispatch } from 'redux-thunk';

import { AppActionsType, initializedSuccess } from 'store/actions/appActions';
import { AppRootStateType } from 'store/store';

export const initializeApp =
  () => (dispatch: ThunkDispatch<AppRootStateType, unknown, AppActionsType>) => {
    const time = 1500;
    setTimeout(() => {
      dispatch(initializedSuccess());
    }, time);
  };
