// src/Components/SearchResultPage/SearchResultList.jsx
import React from "react";
import SearchResultCategory from "./SearchResultCategory";

function SearchResultList({searchResults}) {
    return (
        <div style={{}}>
            <SearchResultCategory searchResults = {searchResults.filter(item => item.category === "news")} context="뉴스" />
            <SearchResultCategory searchResults = {searchResults.filter(item => item.category === "blog")} context="블로그" />
            <SearchResultCategory searchResults = {searchResults.filter(item => item.category === "visitkorea")} context="관광지" />
            {/* <SearchResultCategory context="범죄율" />
            <SearchResultCategory context="지역 만족도" />
            <SearchResultCategory context="청약 공고" />
            <SearchResultCategory context="부동산 정보" /> */}
        </div>
    );
}

export default SearchResultList;
