import React, { useEffect, useState } from 'react';

import { Button } from 'components/common/button/Button';
import style from 'components/common/pagination/Pagination.module.scss';
import { useSelector } from 'react-redux';
import { contentInitializedSelector } from 'store/selectors/appSelectors';

type PaginationPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  paginationLinkCount: number;
};

export const Pagination = (props: PaginationPropsType) => {
  const { totalItemsCount, pageSize, currentPage, onPageChanged, paginationLinkCount } =
    props;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages: number[] = [];

  for (let index = 1; index <= pagesCount; index += 1) {
    pages.push(index);
  }

  const contentInitialized = useSelector(contentInitializedSelector);
  const portionCount = Math.ceil(pagesCount / paginationLinkCount);
  const [portionPageNumber, setPortionPageNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionPageNumber - 1) * paginationLinkCount + 1;
  const rightPortionPageNumber = portionPageNumber * paginationLinkCount;

  const scrollAppUp = (): void => {
    window.scrollTo(0, 0);
  };

  const prevPageAction = (): void => {
    onPageChanged(currentPage - 1);
  };

  const nextPageAction = (): void => {
    onPageChanged(currentPage + 1);
  };

  useEffect(() => {
    scrollAppUp();
    const currentPaginationPages: number[] = pages.filter(
      (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
    );
    const isCurrentPageWithinSight = currentPaginationPages.some(
      (pageNumber) => pageNumber === currentPage,
    );

    if (!isCurrentPageWithinSight) {
      let pageNumberIterationValue = 0;

      for (let portionIndex = 0; portionIndex < portionCount; portionIndex += 1) {
        const portionPagesForCurrentIteration: number[] = pages.slice(
          pageNumberIterationValue,
          pageNumberIterationValue + paginationLinkCount,
        );

        pageNumberIterationValue += paginationLinkCount;
        const isCurrentPageInWithinSightCurrentIteration =
          portionPagesForCurrentIteration.some(
            (pageNumber) => pageNumber === currentPage,
          );

        if (isCurrentPageInWithinSightCurrentIteration) {
          setPortionPageNumber(portionIndex + 1);

          return;
        }
      }
    }
  }, [currentPage]);

  return (
    <div className={style.pagination}>
      <div className={style.buttonsBlock}>
        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            disabled={portionPageNumber <= 1}
            onClick={() => setPortionPageNumber(portionPageNumber - 1)}
          >
            Prev list
          </Button>
        </div>

        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            disabled={currentPage <= 1 || !contentInitialized}
            onClick={prevPageAction}
          >
            Prev
          </Button>
        </div>

        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            disabled={currentPage >= pagesCount || !contentInitialized}
            onClick={nextPageAction}
          >
            Next
          </Button>
        </div>

        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            disabled={portionCount <= portionPageNumber}
            onClick={() => setPortionPageNumber(portionPageNumber + 1)}
          >
            Next list
          </Button>
        </div>
      </div>
      <div>
        <div className={style.pageBlock}>
          {pages
            .filter(
              (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
            )
            .map((page) => (
              <button
                className={`${style.page} ${
                  currentPage === page ? style.selectPage : ''
                }`}
                disabled={!contentInitialized}
                key={page}
                onClick={() => {
                  if (currentPage !== page) {
                    onPageChanged(page);
                  }
                }}
                type='button'
              >
                {page}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
