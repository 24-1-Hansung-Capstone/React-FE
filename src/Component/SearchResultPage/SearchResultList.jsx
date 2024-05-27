import React from "react";
import SearchResultCategory from "./SearchResultCategory";
import style from "./style/SearchResultListStyle";
import { useNavigate } from "react-router-dom";

function SearchResultList({searchResults, setSummary, summary, searchTerm}) {

    const navigate = useNavigate();

    const handleSearchTermClick = () => {
        navigate(`/search/${searchTerm}`); // Navigate to the new search URL
    };

    const category = [
        { type : "news", context : "뉴스📰" },
        { type : "blog", context : "블로그👉" },
        { type : "visitkorea", context : "관광지🧭" },
        { type : "houseproducts", context : "매물🏠" },
    ]
    
    return (
        <div style={{}}>
        {/*<p style={style.recommendtypo} onClick={handleSearchTermClick}>
                다음 검색어로 대신 검색 : <span style={{ cursor: 'pointer', color: 'blue' }}>{searchTerm}</span>
        </p>*/}
        {
            category.map(({type, context}) => 
                <SearchResultCategory searchResults={searchResults.filter(item => item.category === type)} context={context} setSummary={setSummary} summary={summary}/>
            )
        }
        </div>
    );
}

export default SearchResultList;
