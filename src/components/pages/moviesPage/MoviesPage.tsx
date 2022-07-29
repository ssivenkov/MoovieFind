import { PAGINATION_LINKS_PER_PAGE } from 'constants/common';

import { useEffect } from 'react';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { MoviesSection } from 'components/pages/moviesPage/MoviesSection/MoviesSection';
import { useDispatch, useSelector } from 'react-redux';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setCurrentPageAction } from 'store/actions/moviesReducerActions/setCurrentPageAction';
import {
  appInitializedSelector,
  contentInitializedSelector,
} from 'store/selectors/appSelectors';
import {
  currentPageSelector,
  moviesCountInOnePageSelector,
  moviesListSelector,
  totalMoviesCountSelector,
} from 'store/selectors/moviesSelectors';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { ComponentType } from 'types/common/componentType';

export const MoviesPage = (): ComponentType => {
  const dispatch = useDispatch();

  const moviesList = useSelector(moviesListSelector);
  const appInitialized = useSelector(appInitializedSelector);
  const appContentInitialized = useSelector(contentInitializedSelector);
  const currentPage = useSelector(currentPageSelector);
  const movieCountInOnePage = useSelector(moviesCountInOnePageSelector);
  const totalMovieCount = useSelector(totalMoviesCountSelector);

  const sectionTitle = 'Movies';

  const onMoviePageChanged = (pageNumber: number): void => {
    dispatch(setAppContentInitializeAction({ contentInitialized: false }));
    dispatch(setCurrentPageAction({ currentPage: pageNumber }));
    dispatch(getPopularMovies());
  };

  useEffect(() => {
    if (moviesList.length === 0) dispatch(getPopularMovies());
  }, []);

  if (appInitialized && appContentInitialized && moviesList.length === 0) {
    return <div>{`${sectionTitle} not found`}</div>;
  }

  if (appContentInitialized && moviesList.length !== 0) {
    return (
      <>
        <MoviesSection moviesList={moviesList} sectionTitle={sectionTitle} />
        <Pagination
          currentPage={currentPage}
          onPageChanged={onMoviePageChanged}
          pageSize={movieCountInOnePage}
          paginationLinkCount={PAGINATION_LINKS_PER_PAGE}
          totalItemsCount={totalMovieCount}
        />
      </>
    );
  }

  return <Loader />;
};
