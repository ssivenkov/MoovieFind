import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/common/Loader/Loader';
import { Pagination } from 'components/common/Pagination/Pagination';
import { MoviesSection } from 'components/Pages/MoviesPage/MoviesSection/MoviesSection';
import { ZERO, VisiblePaginationLinkCount } from 'constants/common';
import { appContentInitializedFalse } from 'store/actions/appActions';
import { setCurrentPage } from 'store/actions/movieActions';
import { AppRootStateType } from 'store/store';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { MovieType } from 'types/reducers/movieReducerTypes';

export const MoviesPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const sectionTitle = 'Movies';
  const moviesList = useSelector<AppRootStateType, MovieType[]>(
    state => state.movies.moviesList,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );
  const currentPage = useSelector<AppRootStateType, number>(
    state => state.movies.currentPage,
  );
  const movieCountInOnePage = useSelector<AppRootStateType, number>(
    state => state.movies.moviesCountInOnePage,
  );
  const totalMovieCount = useSelector<AppRootStateType, number>(
    state => state.movies.totalMoviesCount,
  );
  const onMoviePageChanged = (pageNumber: number): void => {
    dispatch(appContentInitializedFalse());
    dispatch(setCurrentPage(pageNumber));
    dispatch(getPopularMovies());
  };

  useEffect(() => {
    if (moviesList.length === ZERO) dispatch(getPopularMovies());
  }, []);

  if (appContentInitialized && moviesList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (moviesList.length !== ZERO) {
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
