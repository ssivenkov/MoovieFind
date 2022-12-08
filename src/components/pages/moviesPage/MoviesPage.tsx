import { NOT_FOUND, PAGINATION_LINKS_COUNT } from 'constants/common';

import { useLayoutEffect } from 'react';

import { moviesAPI } from 'api/moviesAPI/moviesAPI';
import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { MoviesSection } from 'components/pages/moviesPage/moviesSection/MoviesSection';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { ComponentType } from 'types/common/componentType';

export const MoviesPage = observer((): ComponentType => {
  const { appStore, movieCardsStore } = useStore();

  const sectionTitle = 'Movies';

  const { moviesPage } = useParams();

  const appInitialized = appStore.appInitialized;
  const appContentInitialized = appStore.contentInitialized;
  const moviesList = movieCardsStore.movieCards;
  const currentPage = Number(moviesPage);
  const movieCountInOnePage = movieCardsStore.moviesInOnePageCount;
  const totalMovieCount = movieCardsStore.totalMoviesCount;

  const getMovies = (page: number) => {
    movieCardsStore.getMovies(moviesAPI.getPopular, page);
  };

  useLayoutEffect(() => {
    appStore.setContentInitialized(false);
    movieCardsStore.setMovieCards([]);
    getMovies(currentPage);
  }, [currentPage]);

  if (!appInitialized || !appContentInitialized) {
    return <Loader />;
  }

  if (appContentInitialized && moviesList.length !== 0) {
    return (
      <>
        <MoviesSection moviesList={moviesList} sectionTitle={sectionTitle} />
        <Pagination
          currentPage={currentPage}
          itemsPerPageCount={movieCountInOnePage}
          totalItemsCount={totalMovieCount}
          visiblePaginationLinksCount={PAGINATION_LINKS_COUNT}
        />
      </>
    );
  }

  return <div>{`${sectionTitle} ${NOT_FOUND}`}</div>;
});
