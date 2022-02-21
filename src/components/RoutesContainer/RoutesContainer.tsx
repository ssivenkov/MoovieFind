import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Error404 } from 'components/common/ErrorPages/Error404';
import { Main } from 'components/Main/Main';
import { Movies } from 'components/Movies/Movies';
import { People } from 'components/People/People';
import { TVShows } from 'components/TVShows/TVShows';
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
      <Route path={PATH.MAIN} element={<Main />} />
      <Route path={PATH.MOVIES} element={<Movies />} />
      <Route path={PATH.TVSHOWS} element={<TVShows />} />
      <Route path={PATH.PEOPLE} element={<People />} />
      <Route path={PATH.ERROR} element={<Error404 />} />
      <Route path={PATH.WRONG_PAGE} element={<Navigate to={PATH.ERROR} />} />
    </Routes>
  );
};
