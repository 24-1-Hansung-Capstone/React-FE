// src/Components/SearchResultPage/RelatedSearchWord.jsx
import React from "react";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function RelatedSearchWord({ recommendation }) {
    return (
        <div style={PageStyles.SearchRecommend}>{recommendation}</div>
    );
}

export default RelatedSearchWord;