import { ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { MovieAPI } from 'api/MovieAPI';
import {
  appContentInitializedFalse,
  appContentInitializedTrue,
  appInitializedTrue,
} from 'store/actions/appActions';
import { clearMovieData, setMovieData } from 'store/actions/movieActions';
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
    await dispatch(appContentInitializedFalse());
    await dispatch(clearMovieData());
    const { language } = getState().app;
    const requestObj: SmallRequestObjectType = { api_key, language };
    try {
      const movieResponse = await MovieAPI.getMovie(movieID, requestObj);
      const movieData = movieResponse.data;
      await dispatch(setMovieData(movieData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting movie. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getExternalMovieLinks =
  (movieID: string): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    await dispatch(appContentInitializedFalse());
    await dispatch(clearMovieData());
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
      dispatch(appInitializedTrue());
    }
  };
