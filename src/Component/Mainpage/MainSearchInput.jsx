// src/Components/MainSearchInput/MainSearchInput.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import searchIcon from "../../Asset/searchIcon.svg";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

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
        <div style={{...PageStyles.SearchBarContainer, ...ComponentStyles.SearchBarContainer}}> {/* 스타일 변경 */}
            <input 
                placeholder="Homes! 검색"  
                style={ComponentStyles.MainSearchBarStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress} // 엔터 키 입력 감지
            />
            <img 
                src={searchIcon} 
                alt="아이콘" 
                style={{...PageStyles.MainIconStyle, ...ComponentStyles.MainIconStyle}}
                onClick={handleSearch} // 검색 아이콘 클릭 시 검색 실행
            />
        </div>
    );
}

export default MainSearchInput;
