import React, { useEffect } from 'react';

import { Error404Page } from 'components/pages/errorPages/Error404Page';
import { LoginPage } from 'components/pages/loginPage/LoginPage';
import { MainPage } from 'components/pages/mainPage/MainPage';
import { MovieCastPage } from 'components/pages/moviePage/movieCastPage/MovieCastPage';
import { MoviePage } from 'components/pages/moviePage/MoviePage';
import { MoviesPage } from 'components/pages/moviesPage/MoviesPage';
import { PeoplePage } from 'components/pages/peoplePage/PeoplePage';
import { SearchPage } from 'components/pages/searchPage/SearchPage';
import { SignUpPage } from 'components/pages/signUpPage/SignUpPage';
import { TVShowPage } from 'components/pages/tvShowPage/TVShowPage';
import { TVShowsPage } from 'components/pages/tvShowsPage/TVShowsPage';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { ComponentType } from 'types/common/componentType';

export const RoutesContainer = observer((): ComponentType => {
  const { appStore } = useStore();

  useEffect(() => {
    appStore.setAppInitialized(true);
  }, []);

  return (
    <Routes>
      <Route element={<LoginPage />} path={PATH.LOGIN} />
      <Route element={<SignUpPage />} path={PATH.SIGNUP} />
      <Route element={<MainPage />} path={PATH.MAIN_PAGE} />
      <Route element={<MoviePage />} path={`${PATH.MOVIE}/:movieID`} />
      <Route element={<MovieCastPage />} path={`${PATH.MOVIE}/:movieID/${PATH.CAST}`} />
      <Route element={<TVShowPage />} path={`${PATH.TV_SHOW}/:tvShowID`} />

      <Route element={<Outlet />} path={PATH.MOVIES}>
        <Route element={<Navigate replace={true} to={PATH.POPULAR} />} index={true} />
        <Route element={<Outlet />} path={PATH.POPULAR}>
          <Route element={<Navigate replace={true} to='1' />} index={true} />
          <Route element={<MoviesPage />} path=':moviesPage' />
        </Route>
        <Route element={<Outlet />} path={PATH.TRENDING}>
          <Route element={<Navigate replace={true} to='1' />} index={true} />
          <Route element={<MoviesPage />} path=':moviesPage' />
        </Route>
      </Route>

      <Route element={<Outlet />} path={PATH.TV_SHOWS}>
        <Route element={<Navigate replace={true} to={PATH.POPULAR} />} index={true} />
        <Route element={<Outlet />} path={PATH.POPULAR}>
          <Route element={<Navigate replace={true} to='1' />} index={true} />
          <Route element={<TVShowsPage />} path=':tvShowsPage' />
        </Route>
        <Route element={<Outlet />} path={PATH.TRENDING}>
          <Route element={<Navigate replace={true} to='1' />} index={true} />
          <Route element={<TVShowsPage />} path=':tvShowsPage' />
        </Route>
      </Route>

      <Route element={<Outlet />} path={PATH.PEOPLE}>
        <Route element={<Navigate replace={true} to='1' />} index={true} />
        <Route element={<PeoplePage />} path=':peoplePage' />
      </Route>

      <Route element={<SearchPage />} path={PATH.SEARCH} />
      <Route element={<Error404Page />} path={PATH.ERROR} />
      <Route element={<Navigate to={PATH.ERROR} />} path={PATH.WRONG_PAGE} />
    </Routes>
  );
});
