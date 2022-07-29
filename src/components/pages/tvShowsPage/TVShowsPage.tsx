import { PAGINATION_LINKS_PER_PAGE } from 'constants/common';

import { useEffect } from 'react';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { TVShowsSection } from 'components/pages/tvShowsPage/tvShowsSection/TVShowsSection';
import { useDispatch, useSelector } from 'react-redux';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setCurrentPageAction } from 'store/actions/tvShowReducerActions/setCurrentPageAction';
import {
  appInitializedSelector,
  contentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  currentPageSelector,
  totalTVShowsCountSelector,
  tvShowsCountInOnePageSelector,
  tvShowsListSelector,
} from 'store/selectors/tvShowsSelectors';
import { getPopularTVShows } from 'store/thunks/tvShowsThunk';
import { ComponentType } from 'types/common/componentType';

export const TVShowsPage = (): ComponentType => {
  const dispatch = useDispatch();

  const sectionTitle = 'TV Shows';

  const TVShowsList = useSelector(tvShowsListSelector);
  const appInitialized = useSelector(appInitializedSelector);
  const appContentInitialized = useSelector(contentInitializedSelector);
  const currentPage = useSelector(currentPageSelector);
  const TVShowsCountInOnePage = useSelector(tvShowsCountInOnePageSelector);
  const totalTVShowsCount = useSelector(totalTVShowsCountSelector);

  const onTVShowPageChanged = (pageNumber: number): void => {
    dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    dispatch(setCurrentPageAction({ currentPage: pageNumber }));
    dispatch(getPopularTVShows());
  };

  useEffect(() => {
    if (TVShowsList.length === 0) {
      dispatch(getPopularTVShows());
    }
  }, []);

  if (appInitialized && appContentInitialized && TVShowsList.length === 0) {
    return <div>{`${sectionTitle} not found`}</div>;
  }

  if (appContentInitialized && TVShowsList.length !== 0) {
    return (
      <>
        <TVShowsSection sectionTitle={sectionTitle} tvShowsList={TVShowsList} />
        <Pagination
          currentPage={currentPage}
          onPageChanged={onTVShowPageChanged}
          pageSize={TVShowsCountInOnePage}
          paginationLinkCount={PAGINATION_LINKS_PER_PAGE}
          totalItemsCount={totalTVShowsCount}
        />
      </>
    );
  }

  return <Loader />;
};
