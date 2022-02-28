import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Button } from 'components/common/Button/Button';
import style from 'components/common/Pagination/Pagination.module.scss';
import { AppRootStateType } from 'store/store';

type PaginationPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  pageLinkCountInOnePage: number;
};

export const Pagination: React.FC<PaginationPropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  pageLinkCountInOnePage,
}) => {
  const one = 1;
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += one) {
    pages.push(i);
  }
  const contentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );
  const portionCount = pagesCount / pageLinkCountInOnePage;
  const [portionNumber, setPortionNumber] = useState<number>(one);
  const leftPortionPageNumber = (portionNumber - one) * pageLinkCountInOnePage + one;
  const rightPortionPageNumber = portionNumber * pageLinkCountInOnePage;

  return (
    <div className={style.pagination}>
      <div className={style.buttonBlock}>
        <Button
          disabled={portionNumber <= one}
          className={style.button}
          onClick={() => setPortionNumber(portionNumber - one)}
        >
          Prev list
        </Button>

        <Button
          disabled={currentPage <= one || !contentInitialized}
          className={style.button}
          onClick={() => onPageChanged(currentPage - one)}
        >
          Prev
        </Button>

        <Button
          disabled={currentPage >= pagesCount || !contentInitialized}
          className={style.button}
          onClick={() => onPageChanged(currentPage + one)}
        >
          Next
        </Button>

        <Button
          disabled={portionCount <= portionNumber}
          className={style.button}
          onClick={() => setPortionNumber(portionNumber + one)}
        >
          Next list
        </Button>
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
