import React from 'react';

const SearchButton = ({ activeButton, handleButtonClick, buttonName }) => {
    return (
        <button
            style={{
                margin: '0 30px',
                backgroundColor: activeButton === buttonName ? 'black' : 'white',
                color: activeButton === buttonName ? 'white' : 'black',
                border: '1px solid black' // 테두리 추가
            }}
            onClick={() => handleButtonClick(buttonName)}
        >
            {buttonName}
        </button>
    );
};

export default SearchButton;
