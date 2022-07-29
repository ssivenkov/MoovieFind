import { ThunkDispatch } from 'redux-thunk';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const getAuthUserData =
  (): AppThunk =>
  (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting user data. ${error}` });
    }
  };
