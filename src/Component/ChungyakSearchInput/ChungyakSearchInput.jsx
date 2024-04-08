// src/Components/ChungyakSearchInput/ChungyakSearchInput.jsx
import React from "react";
import SearchInput from "../SearchInput/SearchInput";

function ChungyakSearchInput({ searchWord }) {
    return (
        <SearchInput searchWord={searchWord} searchUrlPath="ChungyakSearch" />
    );
}

export default ChungyakSearchInput;
