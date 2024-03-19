// src/components/SearchResultPage/SearchResult.jsx
import React from 'react';

const SearchResult = (props) => {
    return (
        <div style={{ border: '1px solid #92baff', margin: '5px', padding: '5px', backgroundColor: '#fff', flex: '1' }}>
            <div>
                <strong>url:</strong> {props.url}
            </div>
            <div>
                <strong>title:</strong> {props.title}
            </div>
            <div>
                <strong>category:</strong> {props.category}
            </div>
            <div>
                <strong>preview:</strong> {props.preview}
            </div>
        </div>
    );
};

export default SearchResult;
