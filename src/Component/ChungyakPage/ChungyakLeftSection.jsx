// src/Components/ChungyakPage/ChungyakLeftSection.jsx
import React from "react";
import ChungyakSearchInput from "./ChungyakSearchInput";
import ChungyakScore from "./ChungyakScore";
import style from "./style/ChangyakLeftSectionStyle"
import Logo from "../../Asset/Logo.png"

const ChungyakLeftSection = () => {
  return (
    <div style={style.leftSection}>
      <div style={style.searchbarAndLogo}>
        <img src={Logo} style={style.logo} />
        <ChungyakSearchInput />
      </div>
      <ChungyakScore />
    </div>
  );
};

export default ChungyakLeftSection;
