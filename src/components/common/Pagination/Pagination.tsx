import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { Button } from 'components/common/Button/Button';
import style from 'components/common/Pagination/Pagination.module.scss';
import { ZERO, ONE } from 'constants/common';
import { getContentInitialized } from 'store/selectors/appSelectors';
import { AppRootStateType } from 'store/store';

type PaginationPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  visiblePaginationLinkCount: number;
};

export const Pagination: React.FC<PaginationPropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  visiblePaginationLinkCount,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages: number[] = [];
  for (let index = 1; index <= pagesCount; index += ONE) {
    pages.push(index);
  }
  const contentInitialized = useSelector<AppRootStateType, boolean>(
    getContentInitialized,
  );
  const portionCount = Math.ceil(pagesCount / visiblePaginationLinkCount);
  const [portionPageNumber, setPortionPageNumber] = useState<number>(ONE);
  const leftPortionPageNumber =
    (portionPageNumber - ONE) * visiblePaginationLinkCount + ONE;
  const rightPortionPageNumber = portionPageNumber * visiblePaginationLinkCount;

  const scrollAppUp = (): void => {
    window.scrollTo(ZERO, ZERO);
  };

  const prevPageAction = (): void => {
    onPageChanged(currentPage - ONE);
  };

  const nextPageAction = (): void => {
    onPageChanged(currentPage + ONE);
  };

  useEffect(() => {
    scrollAppUp();
    const currentPaginationPages: number[] = pages.filter(
      page => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
    );
    const isCurrentPageWithinSight = currentPaginationPages.some(
      pageNumber => pageNumber === currentPage,
    );
    if (!isCurrentPageWithinSight) {
      let pageNumberIterationValue = ZERO;
      for (let portionIndex = ZERO; portionIndex < portionCount; portionIndex += ONE) {
        const portionPagesForCurrentIteration: number[] = pages.slice(
          pageNumberIterationValue,
          pageNumberIterationValue + visiblePaginationLinkCount,
        );
        pageNumberIterationValue += visiblePaginationLinkCount;
        const isCurrentPageInWithinSightCurrentIteration =
          portionPagesForCurrentIteration.some(pageNumber => pageNumber === currentPage);
        if (isCurrentPageInWithinSightCurrentIteration) {
          setPortionPageNumber(portionIndex + ONE);
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
            disabled={portionPageNumber <= ONE}
            className={style.button}
            onClick={() => setPortionPageNumber(portionPageNumber - ONE)}
          >
            Prev list
          </Button>
        </div>

        <div className={style.buttonContainer}>
          <Button
            disabled={currentPage <= ONE || !contentInitialized}
            className={style.button}
            onClick={prevPageAction}
          >
            Prev
          </Button>
        </div>

        <div className={style.buttonContainer}>
          <Button
            disabled={currentPage >= pagesCount || !contentInitialized}
            className={style.button}
            onClick={nextPageAction}
          >
            Next
          </Button>
        </div>

        <div className={style.buttonContainer}>
          <Button
            disabled={portionCount <= portionPageNumber}
            className={style.button}
            onClick={() => setPortionPageNumber(portionPageNumber + ONE)}
          >
            Next list
          </Button>
        </div>
      </div>
      <div>
        <div className={style.pageBlock}>
          {pages
            .filter(
              page => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
            )
            .map(page => (
              <button
                type="button"
                key={page}
                onClick={() => {
                  if (currentPage !== page) {
                    onPageChanged(page);
                  }
                }}
                disabled={!contentInitialized}
                className={`${style.page} ${
                  currentPage === page ? style.selectPage : ''
                } ${!contentInitialized && style.disabledPage}`}
              >
                {page}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
