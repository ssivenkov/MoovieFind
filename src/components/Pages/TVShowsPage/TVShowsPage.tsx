import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/Loader/Loader';
import { Pagination } from 'components/common/Pagination/Pagination';
import { TVShowsSection } from 'components/Pages/TVShowsPage/TVShowsSection/TVShowsSection';
import { VisiblePaginationLinkCount, ZERO } from 'constants/common';
import { appContentInitializedFalse } from 'store/actions/appActions';
import { setCurrentPage } from 'store/actions/TVShowActions';
import { AppRootStateType } from 'store/store';
import { getPopularTVShows } from 'store/thunks/TVShowsThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const TVShowsPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const sectionTitle = 'TV Shows';
  const TVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    state => state.TVShows.TVShowsList,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );
  const currentPage = useSelector<AppRootStateType, number>(
    state => state.TVShows.currentPage,
  );
  const TVShowsCountInOnePage = useSelector<AppRootStateType, number>(
    state => state.TVShows.TVShowsCountInOnePage,
  );
  const totalTVShowsCount = useSelector<AppRootStateType, number>(
    state => state.TVShows.totalTVShowsCount,
  );
  const onTVShowPageChanged = (pageNumber: number): void => {
    dispatch(appContentInitializedFalse());
    dispatch(setCurrentPage(pageNumber));
    dispatch(getPopularTVShows());
  };

  useEffect(() => {
    if (TVShowsList.length === ZERO) dispatch(getPopularTVShows());
  }, []);

  if (appContentInitialized && TVShowsList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (TVShowsList.length !== ZERO) {
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
