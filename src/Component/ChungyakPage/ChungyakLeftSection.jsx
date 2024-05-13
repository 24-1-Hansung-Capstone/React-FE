// src/Components/ChungyakPage/ChungyakLeftSection.jsx
import React from "react";
import ChungyakSearchInput from "./ChungyakSearchInput";
import ChungyakScore from "./ChungyakScore";
import {Link} from "react-router-dom"
import style from "./style/ChangyakLeftSectionStyle"
import Logo from "../../Asset/Logo.png"

const ChungyakLeftSection = () => {
  return (
    <div style={style.leftSection}>
      <div style={style.searchbarAndLogo}>
        <Link to="/">
        <img src={Logo} style={style.logo} />
        </Link>
        <ChungyakSearchInput />
      </div>
      <ChungyakScore />
    </div>
  );
};

export default ChungyakLeftSection;
