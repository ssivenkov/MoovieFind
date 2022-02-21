import { ThunkDispatch } from 'redux-thunk';

import { MoviesAPI } from 'api/MoviesAPI';
import { ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setMovies } from 'store/actions/movieActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { RequestObjectType } from 'types/common/RequestObjectType';

export const getPopularMovies =
  (tempRequestObj: RequestObjectType): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await MoviesAPI.getPopularMovies(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await MoviesAPI.getPopularMovies(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setMovies(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting popular movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getNowPlayingMovies =
  (tempRequestObj: RequestObjectType): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await MoviesAPI.getNowPlayingMovies(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await MoviesAPI.getNowPlayingMovies(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setMovies(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting now playing movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getUpcomingMovies =
  (tempRequestObj: RequestObjectType): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await MoviesAPI.getUpcomingMovies(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await MoviesAPI.getUpcomingMovies(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setMovies(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting upcoming movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getTopRatedMovies =
  (tempRequestObj: RequestObjectType): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await MoviesAPI.getTopRatedMovies(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await MoviesAPI.getTopRatedMovies(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setMovies(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting top rated movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
