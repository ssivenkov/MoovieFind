import { TrendingAPI } from 'api/TrendingAPI/TrendingAPI';
import { ThunkDispatch } from 'redux-thunk';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { setTrendingMoviesAction } from 'store/actions/trendingReducerActions/setTrendingMoviesAction';
import { setTrendingTVShowsAction } from 'store/actions/trendingReducerActions/setTrendingTVShowsAction';
import { MainReducerStateType } from 'store/reducers/mainReducer/types';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { FullRequestType } from 'types/api/requestTypes';

export const getTrendingTVShows =
  (
    tempRequestObj: FullRequestType,
    timeWindow: MainReducerStateType['trendingTimeFilter'],
  ): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };

      requestObj.page = tempRequestObj.page * 2 - 1;
      const response1 = await TrendingAPI.getTrendingTVShows(tempRequestObj, timeWindow);
      const tempNextPageRequestObj = { ...tempRequestObj };

      tempNextPageRequestObj.page += 1;
      const response2 = await TrendingAPI.getTrendingTVShows(
        tempNextPageRequestObj,
        timeWindow,
      );
      const resultResponse = [...response1.data.results, ...response2.data.results];

      dispatch(setTrendingTVShowsAction({ trendingTVShows: resultResponse }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      dispatch(
        setModalTextAction({ modalText: `Error getting trending TV shows. ${error}` }),
      );
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getTrendingMovies =
  (
    tempRequestObj: FullRequestType,
    timeWindow: MainReducerStateType['trendingTimeFilter'],
  ): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };

      requestObj.page = tempRequestObj.page * 2 - 1;
      const response1 = await TrendingAPI.getTrendingMovies(tempRequestObj, timeWindow);
      const tempNextPageRequestObj = { ...tempRequestObj };

      tempNextPageRequestObj.page += 1;
      const response2 = await TrendingAPI.getTrendingMovies(
        tempNextPageRequestObj,
        timeWindow,
      );
      const resultResponse = [...response1.data.results, ...response2.data.results];

      dispatch(setTrendingMoviesAction({ trendingMovies: resultResponse }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting trending movies. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
