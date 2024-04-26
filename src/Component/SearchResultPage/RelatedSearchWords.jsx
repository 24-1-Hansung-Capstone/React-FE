// src/Components/SearchResultPage/RelatedSearchWords.jsx
import React from "react";
import RelatedSearchWord from "./RelatedSearchWord";

function RelatedSearchWords({recommendations}){
    return (
        <div style={{}}>
            {recommendations.map((recommendation, index) => (
                <RelatedSearchWord key={index} recommendation={recommendation} />
            ))}
        </div>
    )
}

export default RelatedSearchWords;