import { ThunkDispatch } from 'redux-thunk';

import { appInitializedTrue } from '../actions/appActions';
import { AppRootActionsType, AppRootStateType } from '../store';

export const getAuthUserData =
  () =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      dispatch(appInitializedTrue());
    } catch (error) {
      console.log(`Error getting user data. ${error}`);
    }
  };
