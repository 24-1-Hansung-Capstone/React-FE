import React, { useState, useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PageButton = styled.span`
  margin: 0.5rem;
  cursor: pointer;
  ${({ ariaCurrent }) => ariaCurrent && 'font-weight: bold;'}
`;

const Pagination = ({ totalPage, limit, page, setPage }) => {
  // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
  const [currentPageArray, setCurrentPageArray] = useState([]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setCurrentPageArray(slicedPageArray);
  }, [totalPage, limit]);

  const sliceArrayByLimit = (totalPage, limit) => {
    const array = [];
    for (let i = 0; i < totalPage; i += limit) {
      array.push(i + 1); // 페이지 번호를 배열에 추가합니다.
    }
    return array;
  };

  return (
    <PaginationWrapper>
      <FaAngleDoubleLeft onClick={() => setPage(1)} disabled={page === 1} />
      <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
      <ButtonWrapper>
        {currentPageArray.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            ariaCurrent={page === pageNumber ? 'page' : null}
          >
            {pageNumber}
          </PageButton>
        ))}
      </ButtonWrapper>
      <FaAngleRight onClick={() => setPage(page + 1)} disabled={page === totalPage} />
      <FaAngleDoubleRight onClick={() => setPage(totalPage)} disabled={page === totalPage} />
    </PaginationWrapper>
  );
};

export default Pagination;
