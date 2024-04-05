// src/Components/LeftBox/LeftBox.jsx
import React from "react";
import ToggleList from "../ToggleList/ToggleList";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function LeftBox({ searchResults }) {
    return (
        <div style={ShareStyles.LeftBox}>
            <ToggleList searchResults = {searchResults}/>
        </div>
    );
}

export default LeftBox;