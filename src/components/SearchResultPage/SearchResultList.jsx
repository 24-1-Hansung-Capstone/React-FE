// SearchResultList.jsx

import React from 'react';

const SearchResultList = ({ searchResults }) => {
    return (
        <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
            {searchResults.map((item, index) => (
                <div key={index} style={{ border: '1px solid black', margin: '5px', padding: '5px', width: '80%', display: 'inline-block' }}>
                    {item.title} - {item.description}
                </div>
            ))}
        </div>
    );
};

export default SearchResultList;
