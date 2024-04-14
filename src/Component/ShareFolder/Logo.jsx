// src/Components/ShareFolder/Logo.jsx
import React from "react";
import logo from '../../Asset/Logo.png';
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function Logo() {
    return (
        <img src={logo} alt="Logo" style={{...PageStyles.CommonLogo, ...ComponentStyles.CommonLogo}} />
    );
}

export default Logo;