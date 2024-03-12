// src/components/SearchResultPage/SearchButton.jsx
import React from 'react';

const SearchButton = ({ active, handleButtonClick, buttonName }) => {
    return (
        <button
            style={{
                width: '130px', // 버튼 가로 길이 세팅
                height: '35px', // 버튼 세로 길이 세팅
                borderRadius: '20px', // 네 각을 동그랗게 세팅
                margin: '0 10px', // 여백 조절
                backgroundColor: active ? '#92baff' : 'white',
                color: active ? 'white' : 'black',
                border: '3px solid #92baff',
                padding: '5px 15px', // 테두리 조절
            }}
            onClick={() => handleButtonClick(buttonName)}
        >
            {buttonName}
        </button>
    );
};

export default SearchButton;
