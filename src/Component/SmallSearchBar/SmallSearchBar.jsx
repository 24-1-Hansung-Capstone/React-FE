// src/Components/SmallSearchBar/SmallSearchBar.jsx
import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import ShareStyles from "../ShareStyles/ShareStyles";

function SmallSearchBar() {
    return (
        <SearchInput style={ShareStyles.ToggleMenu} />
    );
}

export default SmallSearchBar;