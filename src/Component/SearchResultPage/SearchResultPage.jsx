// src/Components/SearchResultPage/SearchResultPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResultNav from "../ShareFolder/SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import style from "./style/SearchResultPageStyle"

function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerm } = useParams();
    
    useEffect(() => {
        getSearchResult(searchTerm, "search", setSearchResults)
    }, [searchTerm]);

    return (
        <div>
            <section style={{}}>
                <SearchResultNav searchWord = {searchTerm } searchUrlPath={"search"}/>
                <div style={style.body}>
                    <SearchResultLeftBox searchResults={searchResults}/>
                    <SearchResultRightBox searchTerm={searchTerm} searchResults={searchResults}/>
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
