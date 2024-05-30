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
    const [isQueryChanged , setIsQueryChanged] = useState(false);

    /** 제안하는 검색어 */
    const [suggestQuery, setSuggestQuery] = useState("")
    const { searchTerm } = useParams();

    useEffect(() => {
        // 관련 state 초기화 후, 검색요청
        setSummary([])
        setIsQueryChanged(false)
        getSearchResult(searchTerm, "search", (res, isQueryChanged , suggest) => {
            setSearchResults(res)
            setIsQueryChanged(isQueryChanged )
            if (isQueryChanged ) {
                setSuggestQuery(suggest)
            }
        });
    }, [searchTerm]);

    return (
        <div>
            <section style={{}}>
                <SearchResultNav searchWord={searchTerm} searchUrlPath={"search"} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <div style={style.body}>
                    <SearchResultLeftBox searchResults={searchResults} setSummary={setSummary} summary={summary} searchTerm={searchTerm} suggestQuery={suggestQuery} isQueryChanged ={isQueryChanged } />
                    <SearchResultRightBox searchTerm={searchTerm} searchResults={searchResults} summary={summary}/> {/* title props 전달 */}
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
