// src/Components/LeftBox/LeftBox.jsx
import React from "react";
import ToggleList from "../ToggleList/ToggleList";
import ShareStyles from "../ShareStyles/ShareStyles";

function LeftBox() {
    return (
        <div style={ShareStyles.LeftBox}>
        <ToggleList />
        </div>
    );
}

export default LeftBox;