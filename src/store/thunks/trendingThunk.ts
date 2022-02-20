import { ThunkDispatch } from 'redux-thunk';

import { TrendingAPI } from 'api/TrendingAPI';
import { ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setTrendingMovies, setTrendingTVShows } from 'store/actions/trendingActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { RequestObjectType } from 'types/RequestObjectType';

export const getTrendingTVShows =
  (tempRequestObj: RequestObjectType, timeWindow: string): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TrendingAPI.getTrendingTVShows(tempRequestObj, timeWindow);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TrendingAPI.getTrendingTVShows(
        tempNextPageRequestObj,
        timeWindow,
      );
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTrendingTVShows(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting trending TWShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getTrendingMovies =
  (tempRequestObj: RequestObjectType, timeWindow: string): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TrendingAPI.getTrendingMovies(tempRequestObj, timeWindow);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TrendingAPI.getTrendingMovies(
        tempNextPageRequestObj,
        timeWindow,
      );
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTrendingMovies(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting trending movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
