// Pagination.jsx

import React from 'react';

const Pagination = ({ pageNumbers, handlePageClick }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {pageNumbers.map((number) => (
                <span key={number} style={{ margin: '15px', cursor: 'pointer' }} onClick={() => handlePageClick(number)}>
                    {number}
                </span>
            ))}
        </div>
    );
};

export default Pagination;
