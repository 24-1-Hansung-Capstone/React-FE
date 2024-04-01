// src/Components/SearchRecommend/SearchRecommend.jsx
import React from "react";
import ShareStyles from "../ShareStyles/ShareStyles";

function SearchRecommend() {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div style={ShareStyles.container}>
            {recommendations.map((recommendation, index) => (
                <div key={index} style={ShareStyles.SearchRecommend}>{recommendation}</div>
            ))}
        </div>
    );
}

export default SearchRecommend;
