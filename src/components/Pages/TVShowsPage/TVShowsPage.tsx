import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { Loader } from 'components/common/Loader/Loader';
import { TVShowsSection } from 'components/Pages/TVShowsPage/TVShowsSection/TVShowsSection';
import { ONE, ZERO } from 'constants/common';
import { AppRootStateType } from 'store/store';
import { getPopularTVShows } from 'store/thunks/TVShowsThunk';
import { RequestObjectType } from 'types/common/RequestObjectType';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

export const TVShowsPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: RequestObjectType = { api_key, language, page };
  const sectionTitle = 'TV Shows';
  const TVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    state => state.TVShows.TVShows,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );

  useEffect(() => {
    if (TVShowsList.length === ZERO) dispatch(getPopularTVShows(tempRequestObj));
  }, []);

  if (appContentInitialized && TVShowsList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (TVShowsList.length !== ZERO) {
    return <TVShowsSection TVShowsList={TVShowsList} sectionTitle={sectionTitle} />;
  }

  return <Loader />;
};
