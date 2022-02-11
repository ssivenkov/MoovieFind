import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Error404 } from 'components/common/ErrorPages/Error404';
import { Loader } from 'components/common/Loader/Loader';
import { Films } from 'components/Films/Films';
import { PATH } from 'routes/routes';
import { initializeApp } from 'store/actions/appActions';
import { AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const RoutesContainer = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const appInitialized = useSelector<AppRootStateType>(state => state.app.appInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!appInitialized) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Navigate to={PATH.FILMS} />} />
      <Route path={PATH.FILMS} element={<Films />} />
      <Route path={PATH.ERROR} element={<Error404 />} />
      <Route path={PATH.WRONG_PAGE} element={<Navigate to={PATH.ERROR} />} />
    </Routes>
  );
};
