// src/components/SearchBar/SearchInput.jsx
import React, { useState } from 'react';

// 검색어 입력하는 창 만들기
const SearchInput = (props) => {

    // 키보드 Enter키를 눌러도 이벤트 발생.
    const searchBarEnterKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.goNavigate();
        }
    }


    return (
        <div>
            <input
                style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#000',
                    outline: 'none',
                    backgroundColor: '#fff',
                    borderStyle: 'none',
                    paddingLeft: '10px',
                    width: '280%',
                }}
                placeholder='홈즈 검색 또는 지도에서 클릭'
                value={props.searchWord}
                onChange={(event) => { props.setSearchWord(event.target.value) }}
                onKeyDown={(event) => { searchBarEnterKeyDown(event) }}
            />
        </div>
    );
}

export default SearchInput;