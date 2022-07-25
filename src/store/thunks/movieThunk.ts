import { ThunkDispatch } from 'redux-thunk';

import { api_key } from 'api/config';
import { MovieAPI } from 'api/MovieAPI';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { clearMovieDataAction } from 'store/actions/movieReducerActions/clearMovieDataAction';
import { setMovieDataAction } from 'store/actions/movieReducerActions/setMovieDataAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import {
  APIKeyRequestObjectType,
  SmallRequestObjectType,
} from 'types/commonTypes/RequestObjectType';

export const getMovie =
  (movieID: string): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    await dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    await dispatch(clearMovieDataAction());
    const { language } = getState().app;
    const requestObj: SmallRequestObjectType = { api_key, language };
    try {
      const movieResponse = await MovieAPI.getMovie(movieID, requestObj);
      const movieData = movieResponse.data;
      await dispatch(setMovieDataAction(movieData));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      console.log(`Error getting movie. ${error}`);
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getExternalMovieLinks =
  (movieID: string): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    await dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    await dispatch(clearMovieDataAction());
    const apiKey: APIKeyRequestObjectType = { api_key };
    try {
      const response = await MovieAPI.getExternalMovieLinks(movieID, apiKey);
      const links = response.data;
      console.log(links);
      /* await dispatch(setMovieData(movieData));
      dispatch(appContentInitializedTrue()); */
    } catch (error) {
      console.log(`Error getting external IDs. ${error}`);
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
