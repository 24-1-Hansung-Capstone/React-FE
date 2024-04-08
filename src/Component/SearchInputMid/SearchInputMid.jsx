// src/Components/SearchInputMid/SearchInputMid.jsx
import React, { useState } from "react";
import MainSearchInput from '../MainSearchInput/MainSearchInput';

function SearchInputMid(props){
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태를 관리합니다.

    // 엔터 키가 눌렸을 때 검색 결과 페이지로 이동하는 함수
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    // 검색 아이콘 클릭 또는 엔터 키 입력 시 실행되는 함수
    const handleSearch = () => {
        // 검색 결과 페이지 URL을 검색어와 함께 동적으로 생성합니다.
        const searchUrl = `http://localhost:3000/search/${searchTerm}`;
        // 생성된 URL로 이동합니다.
        window.location.href = searchUrl;
    };

    return (
        <div style={{
            display: 'flex', // Flexbox 모델을 사용합니다.
            justifyContent: 'center', // 주 축(여기서는 수평 축)을 기준으로 중앙 정렬합니다.
            width: '100%', // 부모 컨테이너의 폭을 최대로 설정합니다.
        }}>
            <MainSearchInput />
        </div>
    )
}

export default SearchInputMid;
