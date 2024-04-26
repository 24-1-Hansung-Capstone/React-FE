// src/Components/ChungyakPage/ChungyakSearchInput.jsx
import React from "react";
import ResultSearchInput from "../ShareFolder/ResultSearchInput";

function ChungyakSearchInput({ searchWord }) {
    return (
        <ResultSearchInput searchWord={searchWord} searchUrlPath="ChungyakSearch" />
    );
}

export default ChungyakSearchInput;
