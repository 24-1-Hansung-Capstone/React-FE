// src/Components/SmallSearchBar/SmallSearchBar.jsx
import React from "react";
import MainSearchInput from "../MainSearchInput/MainSearchInput";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function SmallSearchBar({searchWord}) {
    return (
        <MainSearchInput searchWord ={searchWord} style={ShareStyles.ToggleCategory} />
    );
}

export default SmallSearchBar;