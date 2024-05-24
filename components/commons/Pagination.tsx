import usePagination from '@/hooks/usePagination';
import React, { useEffect } from 'react';

/**
 * @param {number} totalCount - 총 데이터의 갯수.
 * @param {number} itemsInPage - 페이지당 보여지는 아이템의 갯수.
 * @param {number} [visiblePages=5] - 보여질 페이지네이션 버튼의 갯수. 기본값은 5입니다.
 * @param {function} onPageChange - 현재 페이지 값을 상위 컴포넌트로 보내는 콜백 함수.
 */

interface Props {
  totalCount: number;
  itemsInPage: number;
  visiblePages?: number;
  onPageChange: (value: number) => void;
}

const Pagination = ({
  totalCount,
  itemsInPage,
  visiblePages = 5,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalCount / itemsInPage);
  const { currentPage, goToPage, goToNextSet, goToPreviousSet } = usePagination(
    totalPages,
    visiblePages,
  );

  const startPage =
    Math.floor((currentPage - 1) / visiblePages) * visiblePages + 1;
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  //CurrenPage의 변화를 감지해서 그 값을 상위컴포넌트로 전달해줍니다
  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center py-4 text-black200 text-h4-bold ">
      <button
        onClick={goToPreviousSet}
        className={`w-[5rem] h-[5rem] mx-[0.4rem] rounded-[15px] ${
          currentPage <= visiblePages
            ? 'border border-gray200 text-gray200'
            : 'border border-green200 text-green200 hover:bg-green200 hover:text-white duration-500 hover:text-h3-bold hover:w-[4.4rem] hover:h-[4.4rem] hover:mx-[0.7rem] hover:my-[0.2rem]'
        }`}
        disabled={currentPage <= visiblePages}
      >
        {'<'}
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber)}
          className={` rounded-[15px] ${
            currentPage === pageNumber
              ? 'text-white bg-green200 text-h3-bold w-[4.4rem] h-[4.4rem] mx-[0.7rem]'
              : 'w-[5rem] h-[5rem] mx-[0.4rem] border border-green200 text-green200 hover:bg-green200 hover:text-white duration-500 hover:text-h3-bold hover:w-[4.4rem] hover:h-[4.4rem] hover:mx-[0.7rem]'
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={goToNextSet}
        className={`w-[5rem] h-[5rem] mx-[0.4rem] rounded-[15px] ${
          Math.ceil(currentPage / visiblePages) ===
          Math.ceil(totalPages / visiblePages)
            ? 'border border-gray200 text-gray200'
            : 'border border-green200 text-green200 hover:bg-green200 hover:text-white duration-500 hover:text-h3-bold hover:w-[4.4rem] hover:h-[4.4rem] hover:mx-[0.7rem] hover:my-[0.2rem]'
        }`}
        disabled={
          Math.ceil(currentPage / visiblePages) ===
          Math.ceil(totalPages / visiblePages)
        }
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;