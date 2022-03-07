import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/Loader/Loader';
import { Pagination } from 'components/common/Pagination/Pagination';
import { PeopleSection } from 'components/Pages/PeoplePage/PeopleSection/PeopleSection';
import { ZERO, VisiblePaginationLinkCount } from 'constants/common';
import { appContentInitializedFalse } from 'store/actions/appActions';
import { setCurrentPage } from 'store/actions/peopleActions';
import { getAppInitialized, getContentInitialized } from 'store/selectors/appSelectors';
import {
  getCurrentPage,
  getPeopleCountInOnePage,
  getPeopleList,
  getTotalPeopleCount,
} from 'store/selectors/peopleSelectors';
import { AppRootStateType } from 'store/store';
import { getPeople } from 'store/thunks/peopleThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const PeoplePage = (): ReturnComponentType => {
  const sectionTitle = 'People';
  const dispatch = useDispatch();
  const peopleList = useSelector<AppRootStateType, PeopleType[]>(getPeopleList);
  const appInitialized = useSelector<AppRootStateType, boolean>(getAppInitialized);
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    getContentInitialized,
  );
  const currentPage = useSelector<AppRootStateType, number>(getCurrentPage);
  const peopleCountInOnePage = useSelector<AppRootStateType, number>(
    getPeopleCountInOnePage,
  );
  const totalPeopleCount = useSelector<AppRootStateType, number>(getTotalPeopleCount);
  const onPeoplePageChanged = (pageNumber: number): void => {
    dispatch(appContentInitializedFalse());
    dispatch(setCurrentPage(pageNumber));
    dispatch(getPeople());
  };

  useEffect(() => {
    if (peopleList.length === ZERO) dispatch(getPeople());
  }, []);

  if (appInitialized && appContentInitialized && peopleList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (appContentInitialized && peopleList.length !== ZERO) {
    return (
      <>
        <PeopleSection peopleList={peopleList} sectionTitle={sectionTitle} />
        <Pagination
          totalItemsCount={totalPeopleCount}
          currentPage={currentPage}
          onPageChanged={onPeoplePageChanged}
          pageSize={peopleCountInOnePage}
          visiblePaginationLinkCount={VisiblePaginationLinkCount}
        />
      </>
    );
  }

  return <Loader />;
};
