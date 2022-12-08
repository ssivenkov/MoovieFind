import { NOT_FOUND, PAGINATION_LINKS_COUNT } from 'constants/common';

import { useLayoutEffect } from 'react';

import { Loader } from 'components/common/loader/Loader';
import { Pagination } from 'components/common/pagination/Pagination';
import { PeopleSection } from 'components/pages/peoplePage/peopleSection/PeopleSection';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { ComponentType } from 'types/common/componentType';

export const PeoplePage = observer((): ComponentType => {
  const { appStore, peopleStore } = useStore();

  const { peoplePage } = useParams();

  const sectionTitle = 'People';

  const appInitialized = appStore.appInitialized;
  const appContentInitialized = appStore.contentInitialized;
  const peopleList = peopleStore.people;
  const currentPage = Number(peoplePage);
  const peopleCountInOnePage = peopleStore.peopleCountInOnePage;
  const totalPeopleCount = peopleStore.totalPeopleCount;

  const getPeople = (page: number) => {
    peopleStore.getPeople(page);
  };

  useLayoutEffect(() => {
    appStore.setContentInitialized(false);
    peopleStore.setPeopleList([]);
    getPeople(currentPage);
  }, [currentPage]);

  if (!appInitialized || !appContentInitialized) {
    return <Loader />;
  }

  if (appContentInitialized && peopleList.length !== 0) {
    return (
      <>
        <PeopleSection peopleList={peopleList} sectionTitle={sectionTitle} />
        <Pagination
          currentPage={currentPage}
          itemsPerPageCount={peopleCountInOnePage}
          totalItemsCount={totalPeopleCount}
          visiblePaginationLinksCount={PAGINATION_LINKS_COUNT}
        />
      </>
    );
  }

  return <div>{`${sectionTitle} ${NOT_FOUND}`}</div>;
});
