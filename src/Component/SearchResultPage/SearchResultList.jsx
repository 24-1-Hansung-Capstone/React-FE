import React from "react";
import SearchResultCategory from "./SearchResultCategory";
import style from "./style/SearchResultListStyle";
import { useNavigate } from "react-router-dom";

function SearchResultList({searchResults, setSummary, summary, searchTerm, suggestQuery, isQueryChanged }) {

    const navigate = useNavigate();

    const handleSearchTermClick = () => {
        const newURL = `/search/${suggestQuery}`;
        navigate(newURL); // Change URL
        window.location.reload(); // Reload the page
    };

    const renderRecommendation = () => {
        if (isQueryChanged  === true || isQueryChanged ==='true') {
            return (
                <p style={style.recommendtypo} onClick={handleSearchTermClick}>
                    다음 검색어로 대신 검색 : <span style={{ cursor: 'pointer', color: 'blue' }}>{suggestQuery}</span>
                </p>
            );
        }
        return null;
    };

    const category = [
        { type : "news", context : "뉴스📰" },
        { type : "blog", context : "블로그👉" },
        { type : "visitkorea", context : "관광지🧭" },
        { type : "houseproducts", context : "매물🏠" },
    ];
    
    return (
        <div style={{}}>
            {renderRecommendation()}
            {category.map(({type, context}) => 
                <SearchResultCategory key={type} searchResults={searchResults.filter(item => item.category === type)} context={context} setSummary={setSummary} summary={summary}/>
            )}
        </div>
    );
}

export default SearchResultList;
