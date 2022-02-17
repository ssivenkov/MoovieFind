import { ThunkDispatch } from 'redux-thunk';

import { MoviesAPI } from 'api/MoviesAPI';
import { ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setMovies } from 'store/actions/movieActions';
import { AppRootActionsType, AppRootStateType } from 'store/store';
import { RequestObjectType } from 'types/RequestObjectType';

export const getMovies =
  (tempRequestObj: RequestObjectType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await MoviesAPI.getPopularMovies(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await MoviesAPI.getPopularMovies(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      dispatch(setMovies(resultResponse));
    } catch (error) {
      console.log(`Error getting movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
      dispatch(appContentInitializedTrue());
    }
  };
