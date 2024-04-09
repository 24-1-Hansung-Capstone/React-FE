import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import SearchResultNav from "./SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";

const styles = {
    home: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    container: {
        flex: 1,
        display: "flex",
    },
};

function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerm } = useParams();
    useEffect(() => {
        getSearchResult(searchTerm)
    }, [searchTerm]);


    return (
        <div>
            <section style={styles.home}>
                <SearchResultNav searchWord = {searchTerm }/>
                <div style={styles.container}>
                    <SearchResultLeftBox searchResults = {searchResults}/>
                    <SearchResultRightBox searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
