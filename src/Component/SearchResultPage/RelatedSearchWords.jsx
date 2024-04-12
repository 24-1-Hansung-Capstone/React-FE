import React from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import RelatedSearchWord from "./RelatedSearchWord";

function RelatedSearchWords({recommendations}){
    return (
        <div style={ShareStyles.SmallSearchLogo}>
            {recommendations.map((recommendation, index) => (
                <RelatedSearchWord key={index} recommendation={recommendation} />
            ))}
        </div>
    )
}

export default RelatedSearchWords;