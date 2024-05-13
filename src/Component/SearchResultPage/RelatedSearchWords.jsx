// src/Components/SearchResultPage/RelatedSearchWords.jsx
import React from "react";
import RelatedSearchWord from "./RelatedSearchWord";
import style from "./style/RelatedSearchWordsStyle"

function RelatedSearchWords({recommendations }){
    return (
        <div style={style.relatedSearchWords}>
            {recommendations.map((recommendation, index) => (
                <RelatedSearchWord key={index} recommendation={recommendation}/>
            ))}
        </div>
    )
}

export default RelatedSearchWords;