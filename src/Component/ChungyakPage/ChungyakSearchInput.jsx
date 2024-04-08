// src/Components/ChungyakPage/ChungyakSearchInput.jsx
import React from "react";
import SearchInput from "../ShareFolder/SearchInput";

function ChungyakSearchInput({ searchWord }) {
    return (
        <SearchInput searchWord={searchWord} searchUrlPath="ChungyakSearch" />
    );
}

export default ChungyakSearchInput;
