import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { TVShowSection } from 'components/common/TVShowSection/TVShowSection';
import { requestObjectType } from 'components/RoutesContainer/RoutesContainer';
import { ONE } from 'constants/common';
import { TVShowType } from 'store/reducers/TVShowsReducer';
import { AppRootStateType } from 'store/store';
import { getTVShows } from 'store/thunks/TVShowsThunk';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const TVShows = (): ReturnComponentType => {
  const dispatch = useDispatch();
  // eslint-disable-next-line camelcase
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: requestObjectType = { api_key, language, page };

  useEffect(() => {
    dispatch(getTVShows(tempRequestObj));
  }, []);
  const sectionTitle = 'TV Shows';
  const TVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    state => state.TVShows.TVShows,
  );
  return <TVShowSection TVShowsList={TVShowsList} sectionTitle={sectionTitle} />;
};
