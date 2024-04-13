// src/Components/SearchResultPage/RelatedSearchWord.jsx
import React from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function RelatedSearchWord({ recommendation }) {
    return (
        <div style={ShareStyles.SearchRecommend}>{recommendation}</div>
    );
}

export default RelatedSearchWord;