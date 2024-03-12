// src/components/SearchResultPage/SearchResultList.jsx
import React from 'react';

const SearchResultList = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {props.searchResults.map((item, index) => (
                <div key={index} style={{ border: '1px solid #92baff', margin: '5px', padding: '5px', width: '100%', backgroundColor: '#fff' }}>
                    {item.title} - {item.description}
                </div>
            ))}
        </div>
    );
};

export default SearchResultList;
