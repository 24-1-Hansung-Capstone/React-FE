import React from "react";
import SearchResultCategory from "./SearchResultCategory";
import style from "./style/SearchResultListStyle";

function SearchResultList({searchResults, setSummary, summary}) {

    const category = [
        { type : "news", context : "뉴스📰" },
        { type : "blog", context : "블로그👉" },
        { type : "visitkorea", context : "관광지🧭" },
        { type : "houseproducts", context : "매물🏠" },
    ]
    
    return (
        <div style={{}}>
        <p style={style.recommendtypo}>다음 검색어로 대신 검색 : </p>
            {
                category.map(({type, context}) => 
                    <SearchResultCategory searchResults={searchResults.filter(item => item.category === type)} context={context} setSummary={setSummary} summary={summary}/>
                )
            }
            {/* <SearchResultCategory context="범죄율" />
            <SearchResultCategory context="지역 만족도" />
            <SearchResultCategory context="청약 공고" />
            <SearchResultCategory context="부동산 정보" /> */}
        </div>
    );
}

export default SearchResultList;
