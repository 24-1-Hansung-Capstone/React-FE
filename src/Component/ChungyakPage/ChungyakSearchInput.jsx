// src/Components/ChungyakPage/ChungyakSearchInput.jsx
import React from "react";
import ResultSearchInput from "../ShareFolder/ResultSearchInput";
import style from "./style/ChangyakSearchInputStyle"

function ChungyakSearchInput({ searchWord }) {
    return (
        <div style = {style.input}>
            <ResultSearchInput searchWord={searchWord} searchUrlPath="search" />
        </div>
    );
}

export default ChungyakSearchInput;
