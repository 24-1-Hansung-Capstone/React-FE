import React, { useState } from "react";
import SatisfactionLeftBody from "./SatisfactionLeftBody";
import SatisfactionRightBody from "./SatisfactionRightBody";
import style from "./style/SatisfactionBodyStyle";


function SatisfactionBody({ result }) {
    const [InputText, setInputText] = useState('');
    
    return (
        <div style={style.Body}>
            <SatisfactionLeftBody result={result} setInputText={setInputText} />
            <SatisfactionRightBody InputText={InputText} setInputText={setInputText} />
            
        </div>
    )
}

export default SatisfactionBody;
