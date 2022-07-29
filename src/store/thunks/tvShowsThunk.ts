import { MAX_ITEMS_COUNT, MAX_PAGES_COUNT } from 'constants/common';

import { api_key } from 'api/config';
import { TVShowsAPI } from 'api/TVShowsAPI/TVShowsAPI';
import { ThunkDispatch } from 'redux-thunk';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { setTVShowsDataAction } from 'store/actions/tvShowReducerActions/setTVShowsDataAction';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const getPopularTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().tvShows.currentPage;
    const requestObj = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const tvShowsListResponse1 = await TVShowsAPI.getPopularTVs(pageOneRequestObject);

      if (tvShowsListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        tvShowsListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }

      if (tvShowsListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        tvShowsListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }

      const resultTVShowsData = tvShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const TVShowsListResponse2 = await TVShowsAPI.getPopularTVs(pageTwoRequestObject);

      resultTVShowsData.results = [
        ...tvShowsListResponse1.data.results,
        ...TVShowsListResponse2.data.results,
      ];
      dispatch(setTVShowsDataAction({ tvShowsData: resultTVShowsData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting popular TV shows. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getAiringTodayTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().tvShows.currentPage;
    const requestObj = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const tvShowsListResponse1 = await TVShowsAPI.getAiringTodayTVs(
        pageOneRequestObject,
      );

      if (tvShowsListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        tvShowsListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }
      if (tvShowsListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        tvShowsListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }
      const resultTVShowsData = tvShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const tvShowsListResponse2 = await TVShowsAPI.getAiringTodayTVs(
        pageTwoRequestObject,
      );

      resultTVShowsData.results = [
        ...tvShowsListResponse1.data.results,
        ...tvShowsListResponse2.data.results,
      ];
      dispatch(setTVShowsDataAction({ tvShowsData: resultTVShowsData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting airing today TVShows. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getOnTheAirTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().tvShows.currentPage;
    const requestObj = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const tvShowsListResponse1 = await TVShowsAPI.getOnTheAirTVs(pageOneRequestObject);

      if (tvShowsListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        tvShowsListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }
      if (tvShowsListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        tvShowsListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }
      const resultTVShowsData = tvShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const tvShowsListResponse2 = await TVShowsAPI.getOnTheAirTVs(pageTwoRequestObject);

      resultTVShowsData.results = [
        ...tvShowsListResponse1.data.results,
        ...tvShowsListResponse2.data.results,
      ];
      dispatch(setTVShowsDataAction({ tvShowsData: resultTVShowsData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting on the air TVShows. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };

export const getTopRatedTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().tvShows.currentPage;
    const requestObj = { api_key, language, page };

    try {
      const pageOneRequestObject = { ...requestObj };

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const tvShowsListResponse1 = await TVShowsAPI.getTopRatedTVs(pageOneRequestObject);

      if (tvShowsListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        tvShowsListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }
      if (tvShowsListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        tvShowsListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }
      const resultTVShowsData = tvShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const tvShowsListResponse2 = await TVShowsAPI.getTopRatedTVs(pageTwoRequestObject);

      resultTVShowsData.results = [
        ...tvShowsListResponse1.data.results,
        ...tvShowsListResponse2.data.results,
      ];
      dispatch(setTVShowsDataAction({ tvShowsData: resultTVShowsData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting top rated TVShows. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
