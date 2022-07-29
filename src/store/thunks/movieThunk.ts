import { api_key } from 'api/config';
import { MovieAPI } from 'api/MovieAPI/MovieAPI';
import { ThunkDispatch } from 'redux-thunk';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { clearMovieDataAction } from 'store/actions/movieReducerActions/clearMovieDataAction';
import { setMovieDataAction } from 'store/actions/movieReducerActions/setMovieDataAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { APIKeyRequestType, LanguageRequestType } from 'types/api/requestTypes';

export const getMovie =
  (movieID: string): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    try {
      dispatch(setAppContentInitializeAction({ contentInitialized: false }));
      dispatch(clearMovieDataAction());

      const { language } = getState().app;
      const requestObj: LanguageRequestType = { api_key, language };

      const movieResponse = await MovieAPI.getMovie(movieID, requestObj);
      const movieData = movieResponse.data;

      dispatch(setMovieDataAction({ movieData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting movie. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getExternalMovieLinks =
  (movieID: string): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      dispatch(setAppContentInitializeAction({ contentInitialized: false }));
      dispatch(clearMovieDataAction());

      const apiKey: APIKeyRequestType = { api_key };

      await MovieAPI.getExternalLinks(movieID, apiKey);
    } catch (error) {
      setModalTextAction({ modalText: `Error getting external IDs. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
