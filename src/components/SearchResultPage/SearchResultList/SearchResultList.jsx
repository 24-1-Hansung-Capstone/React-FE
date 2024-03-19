// src/components/SearchResultPage/SearchResultList/SearchResultList.jsx
import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = ({ searchResults, searchedWord }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* 왼쪽에 리스트 출력 */}
            <div style={{ flex: '1' }}>
                {searchResults.map((item, index) => (
                    <SearchResult key={index} title={item.title} url={item.url} category={item.category} preview={item.preview} />
                ))}
            </div>
            {/* 가운데에 검은 선 */}
            <div style={{ width: '1px', backgroundColor: '#000', margin: '0 10px' }} />
            {/* 오른쪽에 검색어 출력 */}
            <div style={{ flex: '1', textAlign: 'left' }}>
                <h2>{searchedWord}</h2>
                <p>{searchedWord} 요약</p>
            </div>
        </div>
    );
};

export default SearchResultList;