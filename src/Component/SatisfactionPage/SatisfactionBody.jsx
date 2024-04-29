import React from "react";
import SatisfactionLeftBody from "./SatisfactionLeftBody";
import SatisfactionRightBody from "./SatisfactionRightBody";
import style from "./style/SatisfactionBodyStyle"

function SatisfactionBody({result}) {
    return (
        <div style={style.Body}>
            <SatisfactionLeftBody result = {result}/>
            <SatisfactionRightBody/>
        </div>
    )
}

export default SatisfactionBody