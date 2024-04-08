// src/Components/SearchResultLeftBox/SearchResultLeftBox.jsx
import React from "react";
import SearchResultList from "./SearchResultList";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function SearchResultLeftBox({ searchResults }) {
    return (
        <div style={ShareStyles.SearchResultLeftBox}>
            <SearchResultList searchResults = {searchResults}/>
        </div>
    );
}

export default SearchResultLeftBox;