// src/Components/ShareFolder/Pagination.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
import { Pagination } from '@mui/material';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PageButton = styled.button`
//   background-color: ${(props) => (props["aria-current"] === 'page' ? 'skyblue' : 'white')};
//   border: 1px solid gray;
//   padding: 5px 10px;
//   margin: 0 5px;
//   cursor: pointer;`;


const PaginationBar = ({ currentPage, totalPages, totalItem, onPageChange }) => {

  return (
    // <PaginationWrapper>
    //   {/* 맨 앞으로 가기 */}
    //   <FaAngleDoubleLeft onClick={() => onPageChange(1)} disabled={currentPage === 1} />

    //   {/* 이전 페이지 */}
    //   <FaAngleLeft onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
        
    //   {/* 다음 페이지 */}
    //   <FaAngleRight
    //     onClick={() => onPageChange(currentPage + 1)}
    //     disabled={currentPage === totalPages}
    //   />

    //   {/* 맨 마지막으로 가기 */}
    //   <FaAngleDoubleRight
    //     onClick={() => onPageChange(totalPages)}
    //     disabled={currentPage === totalPages}
    //   />
    // </PaginationWrapper>
    <PaginationWrapper>
      <Pagination count={totalPages} page={currentPage} onChange={(e, n) => onPageChange(n)} variant="outlined" color="primary"/>
    </PaginationWrapper>
  );
};

export default PaginationBar;
