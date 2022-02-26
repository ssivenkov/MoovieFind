import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { Loader } from 'components/common/Loader/Loader';
import { PeopleSection } from 'components/Pages/PeoplePage/PeopleSection/PeopleSection';
import { ONE, ZERO } from 'constants/common';
import { AppRootStateType } from 'store/store';
import { getPeople } from 'store/thunks/peopleThunk';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const PeoplePage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: RequestObjectType = { api_key, language, page };
  const sectionTitle = 'People';
  const peopleList = useSelector<AppRootStateType, Array<PeopleType>>(
    state => state.people.people,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );

  useEffect(() => {
    if (peopleList.length === ZERO) dispatch(getPeople(tempRequestObj));
  }, []);

  if (appContentInitialized && peopleList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (peopleList.length !== ZERO) {
    return <PeopleSection peopleList={peopleList} sectionTitle={sectionTitle} />;
  }

  return <Loader />;
};
