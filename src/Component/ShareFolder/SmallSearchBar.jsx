// src/Components/ShareFolder/SmallSearchBar.jsx
import React from "react";
import MainSearchInput from "../Mainpage/MainSearchInput";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function SmallSearchBar({searchWord}) {
    return (
        <MainSearchInput searchWord ={searchWord} style={{...PageStyles.SearchResultCategoryHeader, ...ComponentStyles.SearchResultCategoryHeader}} />
    );
}

export default SmallSearchBar;