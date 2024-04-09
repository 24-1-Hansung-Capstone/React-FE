import React from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import RelatedSearchWord from "./RelatedSearchWord";

function RelatedSearchWords({recommendations}){
    return (
        <div style={ShareStyles.container}>
            {recommendations.map((recommendation, index) => (
                <RelatedSearchWord key={index} recommendation={recommendation} />
            ))}
        </div>
    )
}

export default RelatedSearchWords;