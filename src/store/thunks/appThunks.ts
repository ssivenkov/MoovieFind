import { ThunkDispatch } from 'redux-thunk';

import { MooviesAPI } from 'api/MooviesApi';
import { TempObjType } from 'components/RoutesContainer/RoutesContainer';
import { AppActionsType, initializedSuccess } from 'store/actions/appActions';
import { AppRootStateType } from 'store/store';

export const initializeApp =
  () => (dispatch: ThunkDispatch<AppRootStateType, unknown, AppActionsType>) => {
    const time = 1500;
    setTimeout(() => {
      dispatch(initializedSuccess());
    }, time);
  };

export const getMoovies =
  (tempObj: TempObjType) =>
  async (/* dispatch: ThunkDispatch<AppRootStateType, unknown, AppActionsType> */) => {
    const response = await MooviesAPI.getPopularMoovies(tempObj);
    console.log(response);
  };
