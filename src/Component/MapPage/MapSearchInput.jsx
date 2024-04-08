// src/Components/MapPage/MapSearchInput.jsx
import React from "react";
import SearchInput from "../ShareFolder/SearchInput";

function MapSearchInput({ searchWord }) {
    return (
        <SearchInput searchWord={searchWord} searchUrlPath="mapsearch" />
    );
}

export default MapSearchInput;
