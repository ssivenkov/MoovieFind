import { PAGINATION_LINKS_PER_PAGE } from 'constants/common';

import { useEffect } from 'react';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { PeopleSection } from 'components/pages/peoplePage/PeopleSection/PeopleSection';
import { useDispatch, useSelector } from 'react-redux';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setCurrentPageAction } from 'store/actions/peopleReducerActions/setCurrentPageAction';
import {
  appInitializedSelector,
  contentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  currentPageSelector,
  peopleCountInOnePageSelector,
  peopleListSelector,
  totalPeopleCountSelector,
} from 'store/selectors/peopleSelectors';
import { getPeople } from 'store/thunks/peopleThunk';
import { ComponentType } from 'types/common/componentType';

export const PeoplePage = (): ComponentType => {
  const dispatch = useDispatch();

  const sectionTitle = 'People';

  const peopleList = useSelector(peopleListSelector);
  const appInitialized = useSelector(appInitializedSelector);
  const appContentInitialized = useSelector(contentInitializedSelector);
  const currentPage = useSelector(currentPageSelector);
  const peopleCountInOnePage = useSelector(peopleCountInOnePageSelector);
  const totalPeopleCount = useSelector(totalPeopleCountSelector);

  const onPeoplePageChanged = (pageNumber: number): void => {
    dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    dispatch(setCurrentPageAction({ currentPage: pageNumber }));
    dispatch(getPeople());
  };

  useEffect(() => {
    if (peopleList.length === 0) {
      dispatch(getPeople());
    }
  }, []);

  if (appInitialized && appContentInitialized && peopleList.length === 0) {
    return <div>{`${sectionTitle} not found`}</div>;
  }

  if (appContentInitialized && peopleList.length !== 0) {
    return (
      <>
        <PeopleSection peopleList={peopleList} sectionTitle={sectionTitle} />
        <Pagination
          currentPage={currentPage}
          onPageChanged={onPeoplePageChanged}
          pageSize={peopleCountInOnePage}
          paginationLinkCount={PAGINATION_LINKS_PER_PAGE}
          totalItemsCount={totalPeopleCount}
        />
      </>
    );
  }

  return <Loader />;
};
