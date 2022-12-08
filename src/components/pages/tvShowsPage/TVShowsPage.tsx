import { NOT_FOUND, PAGINATION_LINKS_COUNT } from 'constants/common';

import { useLayoutEffect } from 'react';

import { tvShowsAPI } from 'api/tvShowsAPI/tvShowsAPI';
import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { TVShowsSection } from 'components/pages/tvShowsPage/tvShowsSection/TVShowsSection';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { ComponentType } from 'types/common/componentType';

export const TVShowsPage = observer((): ComponentType => {
  const { appStore, tvShowCardsStore } = useStore();

  const sectionTitle = 'TV Shows';

  const { tvShowsPage } = useParams();

  const appInitialized = appStore.appInitialized;
  const appContentInitialized = appStore.contentInitialized;
  const tvShowsList = tvShowCardsStore.tvShowCards;
  const currentPage = Number(tvShowsPage);
  const tvShowsCountInOnePage = tvShowCardsStore.tvShowsCountInOnePage;
  const totalTVShowsCount = tvShowCardsStore.totalTVShowsCount;

  const getTVShows = (page: number) => {
    tvShowCardsStore.getTVShows(tvShowsAPI.getPopular, page);
  };

  useLayoutEffect(() => {
    appStore.setContentInitialized(false);
    tvShowCardsStore.setTVShowsCards([]);
    getTVShows(currentPage);
  }, [currentPage]);

  if (!appInitialized || !appContentInitialized) {
    return <Loader />;
  }

  if (appContentInitialized && tvShowsList.length !== 0) {
    return (
      <>
        <TVShowsSection sectionTitle={sectionTitle} tvShowsList={tvShowsList} />
        <Pagination
          currentPage={currentPage}
          itemsPerPageCount={tvShowsCountInOnePage}
          totalItemsCount={totalTVShowsCount}
          visiblePaginationLinksCount={PAGINATION_LINKS_COUNT}
        />
      </>
    );
  }

  return <div>{`${sectionTitle} ${NOT_FOUND}`}</div>;
});
