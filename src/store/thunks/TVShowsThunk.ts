import { ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { TVShowsAPI } from 'api/TVShowsAPI';
import { MaxItemsCount, MaxPagesCount, ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setTVShowsData } from 'store/actions/TVShowActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const getPopularTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().TVShows.currentPage;
    const requestObj = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const TVShowsListResponse1 = await TVShowsAPI.getPopularTVs(pageOneRequestObject);
      if (TVShowsListResponse1.data.total_pages > MaxPagesCount) {
        TVShowsListResponse1.data.total_pages = MaxPagesCount;
      }
      if (TVShowsListResponse1.data.total_results > MaxItemsCount) {
        TVShowsListResponse1.data.total_results = MaxItemsCount;
      }
      const resultTVShowsData = TVShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const TVShowsListResponse2 = await TVShowsAPI.getPopularTVs(pageTwoRequestObject);
      resultTVShowsData.results = [
        ...TVShowsListResponse1.data.results,
        ...TVShowsListResponse2.data.results,
      ];
      await dispatch(setTVShowsData(resultTVShowsData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting popular TVShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getAiringTodayTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().TVShows.currentPage;
    const requestObj = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const TVShowsListResponse1 = await TVShowsAPI.getAiringTodayTVs(
        pageOneRequestObject,
      );
      if (TVShowsListResponse1.data.total_pages > MaxPagesCount) {
        TVShowsListResponse1.data.total_pages = MaxPagesCount;
      }
      if (TVShowsListResponse1.data.total_results > MaxItemsCount) {
        TVShowsListResponse1.data.total_results = MaxItemsCount;
      }
      const resultTVShowsData = TVShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const TVShowsListResponse2 = await TVShowsAPI.getAiringTodayTVs(
        pageTwoRequestObject,
      );
      resultTVShowsData.results = [
        ...TVShowsListResponse1.data.results,
        ...TVShowsListResponse2.data.results,
      ];
      await dispatch(setTVShowsData(resultTVShowsData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting airing today TVShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getOnTheAirTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().TVShows.currentPage;
    const requestObj = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const TVShowsListResponse1 = await TVShowsAPI.getOnTheAirTVs(pageOneRequestObject);
      if (TVShowsListResponse1.data.total_pages > MaxPagesCount) {
        TVShowsListResponse1.data.total_pages = MaxPagesCount;
      }
      if (TVShowsListResponse1.data.total_results > MaxItemsCount) {
        TVShowsListResponse1.data.total_results = MaxItemsCount;
      }
      const resultTVShowsData = TVShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const TVShowsListResponse2 = await TVShowsAPI.getOnTheAirTVs(pageTwoRequestObject);
      resultTVShowsData.results = [
        ...TVShowsListResponse1.data.results,
        ...TVShowsListResponse2.data.results,
      ];
      await dispatch(setTVShowsData(resultTVShowsData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting on the air TVShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };

export const getTopRatedTVShows =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().TVShows.currentPage;
    const requestObj = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const TVShowsListResponse1 = await TVShowsAPI.getTopRatedTVs(pageOneRequestObject);
      if (TVShowsListResponse1.data.total_pages > MaxPagesCount) {
        TVShowsListResponse1.data.total_pages = MaxPagesCount;
      }
      if (TVShowsListResponse1.data.total_results > MaxItemsCount) {
        TVShowsListResponse1.data.total_results = MaxItemsCount;
      }
      const resultTVShowsData = TVShowsListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const TVShowsListResponse2 = await TVShowsAPI.getTopRatedTVs(pageTwoRequestObject);
      resultTVShowsData.results = [
        ...TVShowsListResponse1.data.results,
        ...TVShowsListResponse2.data.results,
      ];
      await dispatch(setTVShowsData(resultTVShowsData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting top rated TVShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
