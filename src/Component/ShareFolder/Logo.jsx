// src/Components/Logo/Logo.jsx
import React from "react";
import logo from '../../Asset/Logo.png';
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function Logo() {
    return (
        <img src={logo} alt="Logo" style={ShareStyles.CommonLogo} />
    );
}

export default Logo;