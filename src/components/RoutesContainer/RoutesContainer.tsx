import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Error404Page } from 'components/Pages/ErrorPages/Error404Page';
import { MainPage } from 'components/Pages/MainPage/MainPage';
import { MoviesPage } from 'components/Pages/MoviesPage/MoviesPage';
import { PeoplePage } from 'components/Pages/PeoplePage/PeoplePage';
import { SearchPage } from 'components/Pages/SearchPage/SearchPage';
import { TVShowsPage } from 'components/Pages/TVShowsPage/TVShowsPage';
import { PATH } from 'routes/routes';
import { appInitializedFalse } from 'store/actions/appActions';
import { AppRootStateType } from 'store/store';
import { getAuthUserData } from 'store/thunks/authThunk';
import { ReturnComponentType } from 'types/common/ReturnComponentType';

export const RoutesContainer = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const location = useLocation();
  const appInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.appInitialized,
  );

  useEffect(() => {
    dispatch(getAuthUserData());
  }, []);

  useEffect(() => {
    if (appInitialized) dispatch(appInitializedFalse());
  }, [location.pathname]);

  return (
    <Routes>
      <Route path={PATH.MAIN} element={<MainPage />} />
      <Route path={PATH.MOVIES} element={<MoviesPage />} />
      <Route path={PATH.TVSHOWS} element={<TVShowsPage />} />
      <Route path={PATH.PEOPLE} element={<PeoplePage />} />
      <Route path={PATH.SEARCH} element={<SearchPage />} />
      <Route path={PATH.ERROR} element={<Error404Page />} />
      <Route path={PATH.WRONG_PAGE} element={<Navigate to={PATH.ERROR} />} />
    </Routes>
  );
};
