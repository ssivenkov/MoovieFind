import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { PeopleSection } from 'components/pages/peoplePage/PeopleSection/PeopleSection';
import { VisiblePaginationLinkCount, ZERO } from 'constants/common';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setCurrentPageAction } from 'store/actions/peopleReducerActions/setCurrentPageAction';
import {
  getAppInitializedSelector,
  getContentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  getCurrentPageSelector,
  getPeopleCountInOnePageSelector,
  getPeopleListSelector,
  getTotalPeopleCountSelector,
} from 'store/selectors/peopleSelectors';
import { getPeople } from 'store/thunks/peopleThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const PeoplePage = (): ReturnComponentType => {
  const sectionTitle = 'People';
  const dispatch = useDispatch();
  const peopleList = useSelector(getPeopleListSelector);
  const appInitialized = useSelector(getAppInitializedSelector);
  const appContentInitialized = useSelector(getContentInitializedSelector);
  const currentPage = useSelector(getCurrentPageSelector);
  const peopleCountInOnePage = useSelector(getPeopleCountInOnePageSelector);
  const totalPeopleCount = useSelector(getTotalPeopleCountSelector);
  const onPeoplePageChanged = (pageNumber: number): void => {
    dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    dispatch(setCurrentPageAction({ currentPage: pageNumber }));
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
