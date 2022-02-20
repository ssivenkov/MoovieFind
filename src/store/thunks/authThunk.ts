import { ThunkDispatch } from 'redux-thunk';

import { appInitializedTrue } from 'store/actions/appActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const getAuthUserData =
  (): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      dispatch(appInitializedTrue());
    } catch (error) {
      console.log(`Error getting user data. ${error}`);
    }
  };
