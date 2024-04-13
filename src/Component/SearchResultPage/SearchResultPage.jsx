// src/Components/SearchResultPage/SearchResultPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import SearchResultNav from "./SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerm } = useParams();
    
    useEffect(() => {
        getSearchResult(searchTerm, setSearchResults)
    }, [searchTerm]);


    return (
        <div>
            <section style={ShareStyles.SearchResultPage}>
                <SearchResultNav searchWord = {searchTerm }/>
                <div style={ShareStyles.SearchResultPageDivide}>
                    <SearchResultLeftBox searchResults = {searchResults}/>
                    <SearchResultRightBox searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
