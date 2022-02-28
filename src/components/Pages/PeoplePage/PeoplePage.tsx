import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/Loader/Loader';
import { Pagination } from 'components/common/Pagination/Pagination';
import { PeopleSection } from 'components/Pages/PeoplePage/PeopleSection/PeopleSection';
import { ZERO, TWENTY } from 'constants/common';
import { appContentInitializedFalse } from 'store/actions/appActions';
import { setCurrentPage } from 'store/actions/peopleActions';
import { AppRootStateType } from 'store/store';
import { getPeople } from 'store/thunks/peopleThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const PeoplePage = (): ReturnComponentType => {
  const sectionTitle = 'People';
  const dispatch = useDispatch();
  const peopleList = useSelector<AppRootStateType, Array<PeopleType>>(
    state => state.people.peopleList,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );
  const currentPage = useSelector<AppRootStateType, number>(
    state => state.people.currentPage,
  );
  const peopleCountInOnePage = useSelector<AppRootStateType, number>(
    state => state.people.peopleCountInOnePage,
  );
  const totalPeopleCount = useSelector<AppRootStateType, number>(
    state => state.people.totalPeopleCount,
  );
  const onPeoplePageChanged = (pageNumber: number): void => {
    dispatch(appContentInitializedFalse());
    dispatch(setCurrentPage(pageNumber));
    dispatch(getPeople());
  };

  useEffect(() => {
    if (peopleList.length === ZERO) dispatch(getPeople());
  }, []);

  if (appContentInitialized && peopleList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (peopleList.length !== ZERO) {
    return (
      <>
        <PeopleSection peopleList={peopleList} sectionTitle={sectionTitle} />
        <Pagination
          totalItemsCount={totalPeopleCount}
          currentPage={currentPage}
          onPageChanged={onPeoplePageChanged}
          pageSize={peopleCountInOnePage}
          pageLinkCountInOnePage={TWENTY}
        />
      </>
    );
  }

  return <Loader />;
};
