import React, { useEffect, useLayoutEffect } from 'react';

import { Error404Page } from 'components/pages/errorPages/Error404Page';
import { LoginPage } from 'components/pages/loginPage/LoginPage';
import { MainPage } from 'components/pages/mainPage/MainPage';
import { MoviePage } from 'components/pages/moviePage/MoviePage';
import { MoviesPage } from 'components/pages/moviesPage/MoviesPage';
import { PeoplePage } from 'components/pages/peoplePage/PeoplePage';
import { SearchPage } from 'components/pages/searchPage/SearchPage';
import { SignUpPage } from 'components/pages/signUpPage/SignUpPage';
import { TVShowPage } from 'components/pages/tvShowPage/TVShowPage';
import { TVShowsPage } from 'components/pages/tvShowsPage/TVShowsPage';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { appInitializedSelector } from 'store/selectors/appSelectors';
import { getAuthUserData } from 'store/thunks/authThunk';
import { ComponentType } from 'types/common/componentType';

export const RoutesContainer = (): ComponentType => {
  const dispatch = useDispatch();

  const location = useLocation();

  const appInitialized = useSelector(appInitializedSelector);

  useLayoutEffect(() => {
    if (appInitialized) dispatch(setAppInitializeAction({ appInitialized: false }));
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getAuthUserData());
  }, []);

  return (
    <Routes>
      <Route element={<LoginPage />} path={PATH.LOGIN} />
      <Route element={<SignUpPage />} path={PATH.SIGNUP} />
      <Route element={<MainPage />} path={PATH.START_PAGE} />
      <Route element={<MoviePage />} path={`${PATH.MOVIE}/:movieID`} />
      <Route element={<TVShowPage />} path={`${PATH.TV_SHOW}/:TWShowID`} />
      <Route element={<Outlet />} path={PATH.MOVIES}>
        <Route element={<Navigate to={PATH.POPULAR} />} index />
        <Route element={<MoviesPage />} path={PATH.POPULAR} />
        <Route element={<MoviesPage />} path={PATH.TRENDING} />
      </Route>
      <Route element={<Outlet />} path={PATH.TV_SHOWS}>
        <Route element={<Navigate to={PATH.POPULAR} />} index />
        <Route element={<TVShowsPage />} path={PATH.POPULAR} />
        <Route element={<TVShowsPage />} path={PATH.TRENDING} />
      </Route>
      <Route element={<PeoplePage />} path={PATH.PEOPLE} />
      <Route element={<SearchPage />} path={PATH.SEARCH} />
      <Route element={<Error404Page />} path={PATH.ERROR} />
      <Route element={<Navigate to={PATH.ERROR} />} path={PATH.WRONG_PAGE} />
    </Routes>
  );
};
