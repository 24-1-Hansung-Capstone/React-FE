// src/components/SearchResultPage/Pagination.jsx

import React from 'react';

const Pagination = (props) => {
    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {props.pageNumbers.map((number) => (
                <span key={number} style={{ margin: '15px', cursor: 'pointer' }} onClick={() => props.handlePageClick(number)}>
                    {number}
                </span>
            ))}
        </div>
    );
};

export default Pagination;