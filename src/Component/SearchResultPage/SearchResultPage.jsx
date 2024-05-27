import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResultNav from "../ShareFolder/SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import style from "./style/SearchResultPageStyle";

function SearchResultPage( {setIsLoggedIn, isLoggedIn} ) {
    const [searchResults, setSearchResults] = useState([]);
    const [summary, setSummary] = useState([]);
    /** 오탈자를 고려하여 새로운 입력을 제안함 true일때만 추천하면 됨. */
    const [isQueryChaged , setIsQueryChanged] = useState(false);

    /** 제안하는 검색어 */
    const [suggestQuery, setSuggestQuery] = useState("")
    const { searchTerm } = useParams();

    useEffect(() => {
        getSearchResult(searchTerm, "search", (res, isQueryChaged , suggest) => {
            setSearchResults(res)
            setIsQueryChanged(isQueryChaged )
            if (isQueryChaged ) {
                setSuggestQuery(suggest)
            }
        });
    }, [searchTerm]);

    return (
        <div>
            <section style={{}}>
                <SearchResultNav searchWord={searchTerm} searchUrlPath={"search"} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <div style={style.body}>
                <SearchResultLeftBox searchResults={searchResults} setSummary={setSummary} summary={summary} searchTerm={searchTerm} suggestQuery={suggestQuery} isQueryChaged ={isQueryChaged } />
                    <SearchResultRightBox searchTerm={searchTerm} searchResults={searchResults} summary={summary}/> {/* title props 전달 */}
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
