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

const sliceArrayByLimit = (totalPage, limit) => {
  const array = [];
  for (let i = 0; i < totalPage; i += limit) {
    array.push(Array.from({ length: limit }, (_, index) => i + index));
  }
  return array;
};

const Pagination = ({ totalPage, limit, page, setPage }) => {
  // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return (
    <PaginationWrapper>
      <FaAngleDoubleLeft onClick={() => setPage(1)} disabled={page === 1} />
      <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
      <ButtonWrapper>
        {currentPageArray?.map((array) =>
          array.map((i) => (
            <PageButton
              key={i + 1}
              onClick={() => setPage(i + 1)}
              ariaCurrent={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </PageButton>
          ))
        )}
      </ButtonWrapper>
      <FaAngleRight onClick={() => setPage(page + 1)} disabled={page === totalPage} />
      <FaAngleDoubleRight onClick={() => setPage(totalPage)} disabled={page === totalPage} />
    </PaginationWrapper>
  );
};

export default Pagination;
