import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResultNav from "../ShareFolder/SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import style from "./style/SearchResultPageStyle";

function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [title, setTitle] = useState(""); // title 상태 추가
    const { searchTerm } = useParams();

    useEffect(() => {
        getSearchResult(searchTerm, "search", setSearchResults);
        setTitle(searchTerm); // 검색어로 title 상태 설정
    }, [searchTerm]);

    return (
        <div>
            <section style={{}}>
                <SearchResultNav searchWord={searchTerm} searchUrlPath={"search"} />
                <div style={style.body}>
                    <SearchResultLeftBox searchResults={searchResults} />
                    <SearchResultRightBox searchTerm={searchTerm} searchResults={searchResults} title={title} /> {/* title props 전달 */}
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
