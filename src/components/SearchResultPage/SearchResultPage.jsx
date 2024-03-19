// src/components/SearchResultPage/SearchResultPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SearchResultList from './SearchResultList/SearchResultList';
import CategoryButton from './CategoryButton'; // 새로운 컴포넌트 임포트
import SearchBar from '../MainPage/SearchBar/SearchBar';
import { Pagination, PaginationItem } from "@mui/material";

const SearchResultPage = () => {
    const { searchedWord } = useParams();
    const [result, setResult] = useState(`${searchedWord}에 대한 검색결과창입니다`);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [searchWord, setSearchWord] = useState(searchedWord);
    const [pageItems, setPageItems] = useState(5);
    const [buttonStates, setButtonStates] = useState({
        " 주변 명소 ": false,
        "  관광지  ": false,
        "   집값   ": false,
        "지역 만족도": false,
        "   범죄율   ": false,
    });

    useEffect(() => {
        // 페이지가 변경될 때마다 API를 호출하여 결과 가져오기
        Axios.get(`http://localhost:8080/search?query=${searchedWord}`)
            .then(response => {
                // 성공 핸들링
                console.log(response.data)
                setSearchResults(response.data);
                setCurrentPage(1);
            })
            .catch(function (error) {
                // 에러 핸들링
                console.log(error);
            });
    }, [searchedWord]);


    const onPageChange = (e, page) => {
        setCurrentPage(page);
    };


    const handleButtonClick = (buttonName) => {
        setButtonStates(prevState => {
            return {
                ...prevState,
                [buttonName]: !prevState[buttonName]
            };
        });
        // 이 부분에서 버튼에 따라 다른 동작 수행
        // 예를 들어 다른 API 호출 등
    };


    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'scroll' }}>
            <SearchBar position='relative' setSearchWord={setSearchWord} searchWord={searchWord} />

            <div style={{ justifyContent: 'center', marginTop: '20px' }}>
                {Object.keys(buttonStates).map(buttonName => (
                    <CategoryButton
                        key={buttonName}
                        active={buttonStates[buttonName]}
                        handleButtonClick={handleButtonClick}
                        buttonName={buttonName}
                    />
                ))}
            </div>

            {/* 2. 검색 결과 리스트 */}
            <div>
                <SearchResultList searchResults={searchResults.slice((currentPage - 1) * pageItems, (currentPage - 1) * pageItems + pageItems)} searchedWord={searchedWord} />
            </div>
                        
            {/* 3. 페이지네이션 */}
            <div>
                <Pagination
                    count={Math.ceil(searchResults.length / pageItems)}
                    page={currentPage}
                    onChange={onPageChange}
                    size="medium"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "15px 0",
                    }}
                    renderItem={(item) => (
                        <PaginationItem {...item} sx={{ fontSize: 12 }} />
                    )}
                />
            </div>
        </div>
    );
};

export default SearchResultPage;