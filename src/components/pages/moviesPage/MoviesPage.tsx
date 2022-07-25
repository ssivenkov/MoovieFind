import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { MoviesSection } from 'components/pages/moviesPage/MoviesSection/MoviesSection';
import { VisiblePaginationLinkCount, ZERO } from 'constants/common';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setCurrentPageAction } from 'store/actions/moviesReducerActions/setCurrentPageAction';
import {
  getAppInitializedSelector,
  getContentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  getCurrentPageSelector,
  getMoviesCountInOnePageSelector,
  getMoviesListSelector,
  getTotalMoviesCountSelector,
} from 'store/selectors/moviesSelectors';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const MoviesPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const sectionTitle = 'Movies';
  const moviesList = useSelector(getMoviesListSelector);
  const appInitialized = useSelector(getAppInitializedSelector);
  const appContentInitialized = useSelector(getContentInitializedSelector);
  const currentPage = useSelector(getCurrentPageSelector);
  const movieCountInOnePage = useSelector(getMoviesCountInOnePageSelector);
  const totalMovieCount = useSelector(getTotalMoviesCountSelector);
  const onMoviePageChanged = (pageNumber: number): void => {
    dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    dispatch(setCurrentPageAction({ currentPage: pageNumber }));
    dispatch(getPopularMovies());
  };

  useEffect(() => {
    if (moviesList.length === ZERO) dispatch(getPopularMovies());
  }, []);

  if (appInitialized && appContentInitialized && moviesList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (appContentInitialized && moviesList.length !== ZERO) {
    return (
      <>
        <MoviesSection moviesList={moviesList} sectionTitle={sectionTitle} />
        <Pagination
          totalItemsCount={totalMovieCount}
          currentPage={currentPage}
          onPageChanged={onMoviePageChanged}
          pageSize={movieCountInOnePage}
          visiblePaginationLinkCount={VisiblePaginationLinkCount}
        />
      </>
    );
  }

  return <Loader />;
};
