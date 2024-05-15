// src/Components/SearchResultPage/RelatedSearchWords.jsx
import React from "react";
import RelatedSearchWord from "./RelatedSearchWord";
import style from "./style/RelatedSearchWordsStyle"

function RelatedSearchWords({ recommendations, searchWord }){
    return (
        <div style={style.relatedSearchWords}>
            {recommendations.map((recommendation, index) => (
                <RelatedSearchWord key={index} recommendation={recommendation} searchWord = {searchWord}/>
            ))}
        </div>
    )
}

export default RelatedSearchWords;