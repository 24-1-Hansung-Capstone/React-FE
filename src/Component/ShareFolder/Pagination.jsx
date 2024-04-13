// src/Components/ShareFolder/Pagination.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props["aria-current"] === 'page' ? 'skyblue' : 'white')};
  border: 1px solid gray;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const sliceArrayByLimit = (totalPage, limit) => {
  const pages = [];
  for (let i = 0; i < totalPage; i += limit) {
    pages.push(Array.from({ length: Math.min(limit, totalPage - i) }, (_, index) => i + index));
  }
  return pages;
};

const Pagination = ({ totalPage, limit, page, setPage }) => {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page, totalPageArray, limit]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage, limit]);

  return (
    <PaginationWrapper>
      <FaAngleDoubleLeft onClick={() => setPage(1)} disabled={page === 1} />
      <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
      <ButtonWrapper>
        {currentPageArray?.map((i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </PageButton>
        ))}
      </ButtonWrapper>
      <FaAngleRight
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      />
      <FaAngleDoubleRight
        onClick={() => setPage(totalPage)}
        disabled={page === totalPage}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
