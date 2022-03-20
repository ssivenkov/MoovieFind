import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/Loader/Loader';
import { Pagination } from 'components/common/Pagination/Pagination';
import { TVShowsSection } from 'components/Pages/TVShowsPage/TVShowsSection/TVShowsSection';
import { VisiblePaginationLinkCount, ZERO } from 'constants/common';
import { appContentInitializedFalse } from 'store/actions/appActions';
import { setCurrentPage } from 'store/actions/TVShowActions';
import {
  getAppInitializedSelector,
  getContentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  getCurrentPageSelector,
  getTotalTVShowsCountSelector,
  getTVShowsCountInOnePageSelector,
  getTVShowsListSelector,
} from 'store/selectors/TVShowsSelectors';
import { AppRootStateType } from 'store/store';
import { getPopularTVShows } from 'store/thunks/TVShowsThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const TVShowsPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const sectionTitle = 'TV Shows';
  const TVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    getTVShowsListSelector,
  );
  const appInitialized = useSelector<AppRootStateType, boolean>(
    getAppInitializedSelector,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    getContentInitializedSelector,
  );
  const currentPage = useSelector<AppRootStateType, number>(getCurrentPageSelector);
  const TVShowsCountInOnePage = useSelector<AppRootStateType, number>(
    getTVShowsCountInOnePageSelector,
  );
  const totalTVShowsCount = useSelector<AppRootStateType, number>(
    getTotalTVShowsCountSelector,
  );
  const onTVShowPageChanged = (pageNumber: number): void => {
    dispatch(appContentInitializedFalse());
    dispatch(setCurrentPage(pageNumber));
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
