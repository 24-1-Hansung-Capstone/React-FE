// Logo.jsx
import React from "react";
import logo from '../../Asset/Logo.png';

function Logo() {
    return (
        <img src={logo} alt="Logo" style={{ width: "200px", height: "100px" }} />
    );
}

export default Logo;
