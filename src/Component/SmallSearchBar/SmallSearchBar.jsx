// src/Components/SmallSearchBar/SmallSearchBar.jsx
import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function SmallSearchBar({searchWord}) {
    return (
        <SearchInput searchWord ={searchWord} style={ShareStyles.ToggleCategory} />
    );
}

export default SmallSearchBar;