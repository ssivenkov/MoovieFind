import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line camelcase
import { api_key } from 'api/key';
import { Error404 } from 'components/common/ErrorPages/Error404';
import { Loader } from 'components/common/Loader/Loader';
import { Films } from 'components/Films/Films';
import { ONE } from 'constants/common';
import { PATH } from 'routes/routes';
import { AppRootStateType } from 'store/store';
import { getMoovies, initializeApp } from 'store/thunks/appThunks';
import { ReturnComponentType } from 'types/ReturnComponentType';

export type TempObjType = {
  // eslint-disable-next-line camelcase
  api_key: string;
  language: string;
  page: number;
};

export const RoutesContainer = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const appInitialized = useSelector<AppRootStateType>(state => state.app.appInitialized);

  // eslint-disable-next-line camelcase
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: TempObjType = { api_key, language, page };

  useEffect(() => {
    dispatch(initializeApp());
    dispatch(getMoovies(tempRequestObj));
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
