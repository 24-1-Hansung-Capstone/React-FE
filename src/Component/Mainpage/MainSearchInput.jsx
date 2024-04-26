// src/Components/MainSearchInput/MainSearchInput.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import searchIcon from "../../Asset/searchIcon.svg";
import MainSearchInputStyle from "../../Asset/style/MainSearchInputStyle.jsx"

function MainSearchInput({searchWord}) {
    const [searchTerm, setSearchTerm] = useState(searchWord); // 검색어 상태를 관리합니다.
    const navigate = useNavigate();

    // 엔터 키가 눌렸을 때 검색 결과 페이지로 이동하는 함수
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    // 검색 아이콘 클릭 또는 엔터 키 입력 시 실행되는 함수
    const handleSearch = () => {
        if (searchTerm !== undefined){
            navigate(`/search/${searchTerm}`)
        }
    };

    return (
        <span style = {MainSearchInputStyle.searchBar}> 
            <input style = {MainSearchInputStyle.searchInput}
                placeholder="Homes! 검색"  
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress} // 엔터 키 입력 감지
            />
            <img style={MainSearchInputStyle.searchButton}
                src={searchIcon} 
                alt="아이콘" 
                onClick={handleSearch} // 검색 아이콘 클릭 시 검색 실행
            />
        </span>
    );
}

export default MainSearchInput;
