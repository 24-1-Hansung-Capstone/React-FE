// src/Components/ChungyakPage/ChungyakRightSection.jsx
import React, {useState} from "react";
import ChungyakList from "./ChangyakList";
import style from "./style/ChangyakRightSectionStyle";

const ChungyakRightSection = () => {
  return (
    <div style={style.chungyakRightSection}>
      <ChungyakList/>
    </div>
  );
};

export default ChungyakRightSection;
