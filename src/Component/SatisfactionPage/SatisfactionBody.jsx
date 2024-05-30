// src/Components/SatisfactionPage/SatisfactionBody.jsx
import React, { useState } from "react";
import SatisfactionLeftBody from "./SatisfactionLeftBody";
import SatisfactionRightBody from "./SatisfactionRightBody";
import style from "./style/SatisfactionBodyStyle";

function SatisfactionBody({ result, setReview, searchTerm, suggestQuery, isQueryChanged}) {
    const [InputText, setInputText] = useState('');


    return (
        <div style={style.Body}>
            <SatisfactionLeftBody result={result} setInputText={setInputText} setReview={setReview} searchTerm={searchTerm} suggestQuery={suggestQuery} isQueryChanged ={isQueryChanged } />
            <SatisfactionRightBody InputText={InputText} setInputText={setInputText}  />
        </div>
    )
}

export default SatisfactionBody;