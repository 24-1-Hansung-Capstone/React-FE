// src/components/SearchResultPage/SearchButton.jsx
import React from 'react';

const SearchButton = ({ active, handleButtonClick, buttonName }) => {
    return (
        <button
            style={{
                size: "large",
                margin: '0 30px',
                backgroundColor: active ? '#92baff' : 'white',
                color: active ? 'white' : 'black',
                border: '1px solid black' // 테두리 추가
            }}
            onClick={() => handleButtonClick(buttonName)}
        >
            {buttonName}
        </button>
    );
};

export default SearchButton;