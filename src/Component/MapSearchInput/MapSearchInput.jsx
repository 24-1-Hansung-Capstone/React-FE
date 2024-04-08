// src/Components/MapSearchInput/MapSearchInput.jsx
import React from "react";
import SearchInput from "../SearchInput/SearchInput";

function MapSearchInput({ searchWord }) {
    return (
        <SearchInput searchWord={searchWord} searchUrlPath="mapsearch" />
    );
}

export default MapSearchInput;
