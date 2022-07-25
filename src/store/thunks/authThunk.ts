import { ThunkDispatch } from 'redux-thunk';

import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const getAuthUserData =
  (): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    } catch (error) {
      console.log(`Error getting user data. ${error}`);
    }
  };
