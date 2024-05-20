import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResultNav from "../ShareFolder/SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import style from "./style/SearchResultPageStyle";

function SearchResultPage( {setIsLoggedIn, isLoggedIn} ) {
    const [searchResults, setSearchResults] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        getSearchResult(searchTerm, "search", (res) => {
            setSearchResults(res)
            console.log("검색결과 없어영", res)
        });
    }, [searchTerm]);

    return (
        <div>
            <section style={{}}>
                <SearchResultNav searchWord={searchTerm} searchUrlPath={"search"} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <div style={style.body}>
                    <SearchResultLeftBox searchResults={searchResults} />
                    <SearchResultRightBox searchTerm={searchTerm} searchResults={searchResults}/> {/* title props 전달 */}
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
