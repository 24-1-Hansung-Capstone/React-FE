import React from "react";
import SatisfactionLeftBody from "./SatisfactionLeftBody";
import SatisfactionRightBody from "./SatisfactionRightBody";

function SatisfactionBody({result}) {
    return (
        <div style={{
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"stretch"
        }}>
            <SatisfactionLeftBody result = {result}/>
            <SatisfactionRightBody/>
        </div>
    )
}

export default SatisfactionBody