import { ThunkDispatch } from 'redux-thunk';

import { TrendingAPI } from 'api/TrendingAPI';
import { ONE, TWO } from 'constants/common';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setTrendingMoviesAction } from 'store/actions/trendingReducerActions/setTrendingMoviesAction';
import { setTrendingTVShowsAction } from 'store/actions/trendingReducerActions/setTrendingTVShowsAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';

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
      await dispatch(setTrendingTVShowsAction({ trendingTVShows: resultResponse }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      console.log(`Error getting trending TWShows. ${error}`);
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
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
      await dispatch(setTrendingMoviesAction({ trendingMovies: resultResponse }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      console.log(`Error getting trending movies. ${error}`);
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
