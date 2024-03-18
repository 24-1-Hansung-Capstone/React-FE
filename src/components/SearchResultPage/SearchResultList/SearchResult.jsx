// src/components/SearchResultPage/SearchResultList.jsx
import React from 'react';

const SearchResult = (props) => {
    return (
    <div style={{ border: '1px solid #92baff', margin: '5px', padding: '5px', backgroundColor: '#fff' }}>
        url = {props.url}
        <br/>
        title = {props.title}
        <br/>
        category = {props.category}
        <br/>
        preview = {props.preview}
        <br/>
    </div>)
};

export default SearchResult;
