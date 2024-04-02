// src/Components/SearchRecommend/SearchRecommend.jsx
import React from "react";
import ShareStyles from "../ShareStyles/ShareStyles";

function SearchRecommend({ recommendation }) {
    return (
        <div style={ShareStyles.SearchRecommend}>{recommendation}</div>
    );
}

export default SearchRecommend;