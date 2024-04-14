// src/Components/SearchResultPage/SearchResultPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import SearchResultNav from "./SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerm } = useParams();
    
    useEffect(() => {
        getSearchResult(searchTerm, "search", setSearchResults)
    }, [searchTerm]);


    return (
        <div>
            <section style={{...PageStyles.SearchResultPage, ...ComponentStyles.SearchResultPage}}>
                <SearchResultNav searchWord = {searchTerm }/>
                <div style={PageStyles.SearchResultPageDivide}>
                    <SearchResultLeftBox searchResults = {searchResults}/>
                    <SearchResultRightBox searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
