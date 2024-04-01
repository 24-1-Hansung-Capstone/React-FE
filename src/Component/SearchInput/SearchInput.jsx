// src/Components/SearchInput/SearchInput.jsx
import React, { useState } from "react";
import searchIcon from "../../Asset/searchIcon.svg";

function SearchInput(props) {
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
            border: "5px solid #92baff",
            borderRadius: "30px",
            width: "830px",
            height: "60px",
            display: 'flex',
            alignItems: 'center',
        }}>
            <input 
                placeholder="Homes! 검색"  
                style={{ 
                    backgroundColor: 'transparent',
                    border: "none",
                    outline: "none",
                    width: "800px",
                    height: "40px",
                    fontSize: "20px",
                    fontFamily: "Roboto",
                    paddingLeft: "20px",
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress} // 엔터 키 입력 감지
            />
            <img 
                src={searchIcon} 
                alt="아이콘" 
                style={{
                    width: '50px', 
                    height: '50px',
                    paddingRight:"20px",
                    cursor: 'pointer' // 포인터 커서로 변경하여 클릭 가능한 상태로 만듭니다.
                }} 
                onClick={handleSearch} // 검색 아이콘 클릭 시 검색 실행
            />
        </div>
    );
}

export default SearchInput;
