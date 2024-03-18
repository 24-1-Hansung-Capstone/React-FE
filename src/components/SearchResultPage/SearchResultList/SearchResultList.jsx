// src/components/SearchResultPage/SearchResultList.jsx
import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {props.searchResults.map((item, index) => (
                <SearchResult title = {item.title} url = {item.url} category = {item.category} preview = {item.preview}/>
            ))}
        </div>
    );
};

export default SearchResultList;
