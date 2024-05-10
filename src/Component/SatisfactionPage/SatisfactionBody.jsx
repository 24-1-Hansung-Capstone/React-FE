import React, { useState } from "react";
import SatisfactionLeftBody from "./SatisfactionLeftBody";
import SatisfactionRightBody from "./SatisfactionRightBody";
import style from "./style/SatisfactionBodyStyle";


function SatisfactionBody({ result, setReview, barChartData}) {
    const [InputText, setInputText] = useState('');
    
    return (
        <div style={style.Body}>
            <SatisfactionLeftBody result={result} setInputText={setInputText} setReview={setReview} />
            <SatisfactionRightBody InputText={InputText} setInputText={setInputText} barChartData={barChartData}/>
            
        </div>
    )
}

export default SatisfactionBody;
