import { ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { MoviesAPI } from 'api/MoviesAPI';
import { MaxItemsCount, MaxPagesCount, ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setMoviesData } from 'store/actions/moviesActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';

export const getPopularMovies =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().movies.currentPage;
    const requestObj: RequestObjectType = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const moviesListResponse1 = await MoviesAPI.getPopularMovies(pageOneRequestObject);
      if (moviesListResponse1.data.total_pages > MaxPagesCount) {
        moviesListResponse1.data.total_pages = MaxPagesCount;
      }
      if (moviesListResponse1.data.total_results > MaxItemsCount) {
        moviesListResponse1.data.total_results = MaxItemsCount;
      }
      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const moviesListResponse2 = await MoviesAPI.getPopularMovies(pageTwoRequestObject);
      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];
      await dispatch(setMoviesData(resultMoviesData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting popular movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
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
    const requestObj: RequestObjectType = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const moviesListResponse1 = await MoviesAPI.getNowPlayingMovies(
        pageOneRequestObject,
      );
      if (moviesListResponse1.data.total_pages > MaxPagesCount) {
        moviesListResponse1.data.total_pages = MaxPagesCount;
      }
      if (moviesListResponse1.data.total_results > MaxItemsCount) {
        moviesListResponse1.data.total_results = MaxItemsCount;
      }
      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const moviesListResponse2 = await MoviesAPI.getNowPlayingMovies(
        pageTwoRequestObject,
      );
      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];
      await dispatch(setMoviesData(resultMoviesData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting now playing movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
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
    const requestObj: RequestObjectType = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const moviesListResponse1 = await MoviesAPI.getUpcomingMovies(pageOneRequestObject);
      if (moviesListResponse1.data.total_pages > MaxPagesCount) {
        moviesListResponse1.data.total_pages = MaxPagesCount;
      }
      if (moviesListResponse1.data.total_results > MaxItemsCount) {
        moviesListResponse1.data.total_results = MaxItemsCount;
      }
      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const moviesListResponse2 = await MoviesAPI.getUpcomingMovies(pageTwoRequestObject);
      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];
      await dispatch(setMoviesData(resultMoviesData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting upcoming movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
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
    const requestObj: RequestObjectType = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const moviesListResponse1 = await MoviesAPI.getTopRatedMovies(pageOneRequestObject);
      if (moviesListResponse1.data.total_pages > MaxPagesCount) {
        moviesListResponse1.data.total_pages = MaxPagesCount;
      }
      if (moviesListResponse1.data.total_results > MaxItemsCount) {
        moviesListResponse1.data.total_results = MaxItemsCount;
      }
      const resultMoviesData = moviesListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const moviesListResponse2 = await MoviesAPI.getTopRatedMovies(pageTwoRequestObject);
      resultMoviesData.results = [
        ...moviesListResponse1.data.results,
        ...moviesListResponse2.data.results,
      ];
      await dispatch(setMoviesData(resultMoviesData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting top rated movies. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
