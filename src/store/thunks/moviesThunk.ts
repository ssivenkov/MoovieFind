import { MAX_ITEMS_COUNT, MAX_PAGES_COUNT } from 'constants/common';

import { api_key } from 'api/config';
import { MoviesAPI } from 'api/MoviesAPI/MoviesAPI';
import { ThunkDispatch } from 'redux-thunk';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { setMoviesDataAction } from 'store/actions/moviesReducerActions/setMoviesDataAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { FullRequestType } from 'types/api/requestTypes';

export const getPopularMovies =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().movies.currentPage;
    const requestObj: FullRequestType = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const moviesListResponse1 = await MoviesAPI.getPopular(pageOneRequestObject);

      if (moviesListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        moviesListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }

      if (moviesListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        moviesListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }

      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const moviesListResponse2 = await MoviesAPI.getPopular(pageTwoRequestObject);

      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];

      dispatch(setMoviesDataAction({ moviesData: resultMoviesData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting popular movies. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getNowPlayingMovies =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().movies.currentPage;
    const requestObj: FullRequestType = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const moviesListResponse1 = await MoviesAPI.getNowPlaying(pageOneRequestObject);

      if (moviesListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        moviesListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }

      if (moviesListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        moviesListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }

      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const moviesListResponse2 = await MoviesAPI.getNowPlaying(pageTwoRequestObject);

      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];

      dispatch(setMoviesDataAction({ moviesData: resultMoviesData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting now playing movies. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getUpcomingMovies =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().movies.currentPage;
    const requestObj: FullRequestType = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const moviesListResponse1 = await MoviesAPI.getUpcoming(pageOneRequestObject);

      if (moviesListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        moviesListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }

      if (moviesListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        moviesListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }

      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const moviesListResponse2 = await MoviesAPI.getUpcoming(pageTwoRequestObject);

      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];

      dispatch(setMoviesDataAction({ moviesData: resultMoviesData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting upcoming movies. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getTopRatedMovies =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().movies.currentPage;
    const requestObj: FullRequestType = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const moviesListResponse1 = await MoviesAPI.getTopRated(pageOneRequestObject);

      if (moviesListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        moviesListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }

      if (moviesListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        moviesListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }

      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const moviesListResponse2 = await MoviesAPI.getTopRated(pageTwoRequestObject);

      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];

      dispatch(setMoviesDataAction({ moviesData: resultMoviesData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting top rated movies. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
