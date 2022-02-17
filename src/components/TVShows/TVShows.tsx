import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { Loader } from 'components/common/Loader/Loader';
import { TVShowSection } from 'components/common/TVShowSection/TVShowSection';
import { ONE, ZERO } from 'constants/common';
import { TVShowType } from 'store/reducers/TVShowsReducer';
import { AppRootStateType } from 'store/store';
import { getTVShows } from 'store/thunks/TVShowsThunk';
import { RequestObjectType } from 'types/RequestObjectType';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const TVShows = (): ReturnComponentType => {
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
    if (TVShowsList.length === ZERO) dispatch(getTVShows(tempRequestObj));
  }, []);

  if (appContentInitialized && TVShowsList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (TVShowsList.length !== ZERO) {
    return <TVShowSection TVShowsList={TVShowsList} sectionTitle={sectionTitle} />;
  }

  return <Loader />;
};
