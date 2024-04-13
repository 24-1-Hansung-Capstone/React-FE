// src/Components/ShareFolder/SmallSearchBar.jsx
import React from "react";
import MainSearchInput from "../Mainpage/MainSearchInput";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function SmallSearchBar({searchWord}) {
    return (
        <MainSearchInput searchWord ={searchWord} style={ShareStyles.SearchResultCategory} />
    );
}

export default SmallSearchBar;