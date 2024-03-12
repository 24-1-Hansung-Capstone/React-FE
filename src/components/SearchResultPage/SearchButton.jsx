// src/components/SearchResultPage/SearchButton.jsx
import React from 'react';

const SearchButton = (props) => {
    return (
        <button
            style={{
                margin: '0 30px',
                backgroundColor: props.active ? 'black' : 'white',
                color: props.active ? 'white' : 'black',
                border: '1px solid black' // 테두리 추가
            }}
            onClick={() => props.handleButtonClick(props.buttonName)}
        >
            {props.buttonName}
        </button>
    );
};

export default SearchButton;