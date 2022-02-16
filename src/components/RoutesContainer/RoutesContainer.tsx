import React /* , { useEffect } */ from 'react';

import { /* useDispatch, */ useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

/* // eslint-disable-next-line camelcase
import { api_key } from 'api/config'; */
import { Error404 } from 'components/common/ErrorPages/Error404';
import { Loader } from 'components/common/Loader/Loader';
import { Movies } from 'components/Movies/Movies';
import { People } from 'components/People/People';
import { TVShows } from 'components/TVShows/TVShows';
/* import { ONE } from 'constants/common'; */
import { PATH } from 'routes/routes';
import { AppRootStateType } from 'store/store';
/* import { getMoovies } from 'store/thunks/filmsThunk'; */
import { ReturnComponentType } from 'types/ReturnComponentType';

export type requestObjectType = {
  // eslint-disable-next-line camelcase
  api_key: string;
  language: string;
  page: number;
};

export const RoutesContainer = (): ReturnComponentType => {
  const appInitialized = useSelector<AppRootStateType>(state => state.app.appInitialized);
  /* const dispatch = useDispatch();

  // eslint-disable-next-line camelcase
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: requestObjectType = { api_key, language, page };

  useEffect(() => {
    dispatch(getMoovies(tempRequestObj));
  }, []); */

  if (!appInitialized) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Navigate to={PATH.MOVIES} />} />
      <Route path={PATH.MOVIES} element={<Movies />} />
      <Route path={PATH.TVSHOWS} element={<TVShows />} />
      <Route path={PATH.PEOPLE} element={<People />} />
      <Route path={PATH.ERROR} element={<Error404 />} />
      <Route path={PATH.WRONG_PAGE} element={<Navigate to={PATH.ERROR} />} />
    </Routes>
  );
};
