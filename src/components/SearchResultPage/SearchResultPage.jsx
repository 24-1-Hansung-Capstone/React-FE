import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SearchResultList from './SearchResultList';
import Pagination from './Pagination';

const SearchResultPage = () => {
    const { searchWord } = useParams();
    const [result, setResult] = useState(`${searchWord}에 대한 검색결과창입니다`);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // 페이지가 변경될 때마다 API를 호출하여 결과 가져오기
        Axios.get(`http://localhost:8080/search?query=${searchWord}&page=${currentPage}`)
            .then(response => {
                // 성공 핸들링
                setSearchResults(response.data);
            })
            .catch(function (error) {
                // 에러 핸들링
                console.log(error);
            });
    }, [searchWord, currentPage]);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 페이지 번호 배열 생성 (1부터 10까지)
    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ margin: '20px auto' }}>{result}</div>
            {/* 검색 결과를 나타내는 리스트 컴포넌트 */}
            <SearchResultList searchResults={searchResults} />
            {/* 페이지 번호 출력 */}
            <Pagination pageNumbers={pageNumbers} handlePageClick={handlePageClick} />
        </div>
    );
};

export default SearchResultPage;
