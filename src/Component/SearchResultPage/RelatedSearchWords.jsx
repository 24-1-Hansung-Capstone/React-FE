// src/Components/SearchResultPage/RelatedSearchWords.jsx
import React from "react";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import RelatedSearchWord from "./RelatedSearchWord";

function RelatedSearchWords({recommendations}){
    return (
        <div style={{...PageStyles.SmallSearchLogo, ...ComponentStyles.SmallSearchLogo}}>
            {recommendations.map((recommendation, index) => (
                <RelatedSearchWord key={index} recommendation={recommendation} />
            ))}
        </div>
    )
}

export default RelatedSearchWords;