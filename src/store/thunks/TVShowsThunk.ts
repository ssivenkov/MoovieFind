import { ThunkDispatch } from 'redux-thunk';

import { TVShowsAPI } from 'api/TVShowsAPI';
import { ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setTVShows } from 'store/actions/TVShowActions';
import { AppRootActionsType, AppRootStateType } from 'store/store';
import { RequestObjectType } from 'types/RequestObjectType';

export const getPopularTVShows =
  (tempRequestObj: RequestObjectType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TVShowsAPI.getPopularTVs(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TVShowsAPI.getPopularTVs(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTVShows(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting popular TWShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
export const getAiringTodayTVShows =
  (tempRequestObj: RequestObjectType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TVShowsAPI.getAiringTodayTVs(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TVShowsAPI.getAiringTodayTVs(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTVShows(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting airing today TWShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getOnTheAirTVShows =
  (tempRequestObj: RequestObjectType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TVShowsAPI.getOnTheAirTVs(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TVShowsAPI.getOnTheAirTVs(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTVShows(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting on the air TWShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getTopRatedTVShows =
  (tempRequestObj: RequestObjectType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TVShowsAPI.getTopRatedTVs(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TVShowsAPI.getTopRatedTVs(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTVShows(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting top rated TWShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
