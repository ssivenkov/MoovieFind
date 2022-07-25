import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { TVShowsSection } from 'components/pages/tvShowsPage/tvShowsSection/TVShowsSection';
import { VisiblePaginationLinkCount, ZERO } from 'constants/common';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setCurrentPageAction } from 'store/actions/tvShowReducerActions/setCurrentPageAction';
import {
  getAppInitializedSelector,
  getContentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  getCurrentPageSelector,
  getTotalTVShowsCountSelector,
  getTVShowsCountInOnePageSelector,
  getTVShowsListSelector,
} from 'store/selectors/tvShowsSelectors';
import { getPopularTVShows } from 'store/thunks/tvShowsThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const TVShowsPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const sectionTitle = 'TV Shows';
  const TVShowsList = useSelector(getTVShowsListSelector);
  const appInitialized = useSelector(getAppInitializedSelector);
  const appContentInitialized = useSelector(getContentInitializedSelector);
  const currentPage = useSelector(getCurrentPageSelector);
  const TVShowsCountInOnePage = useSelector(getTVShowsCountInOnePageSelector);
  const totalTVShowsCount = useSelector(getTotalTVShowsCountSelector);
  const onTVShowPageChanged = (pageNumber: number): void => {
    dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    dispatch(setCurrentPageAction({ currentPage: pageNumber }));
    dispatch(getPopularTVShows());
  };

  useEffect(() => {
    if (TVShowsList.length === ZERO) dispatch(getPopularTVShows());
  }, []);

  if (appInitialized && appContentInitialized && TVShowsList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (appContentInitialized && TVShowsList.length !== ZERO) {
    return (
      <>
        <TVShowsSection TVShowsList={TVShowsList} sectionTitle={sectionTitle} />
        <Pagination
          totalItemsCount={totalTVShowsCount}
          currentPage={currentPage}
          onPageChanged={onTVShowPageChanged}
          pageSize={TVShowsCountInOnePage}
          visiblePaginationLinkCount={VisiblePaginationLinkCount}
        />
      </>
    );
  }

  return <Loader />;
};
