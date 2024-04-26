// src/Components/SearchResultPage/RelatedSearchWord.jsx
import React from "react";
import style from "./style/RelatedSearchWordStyle"

function RelatedSearchWord({ recommendation }) {
    return (
        <div style={style.relatedSearchWord}>{recommendation}</div>
    );
}

export default RelatedSearchWord;