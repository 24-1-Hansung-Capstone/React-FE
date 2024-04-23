// src/Components/ChungyakPage/ChungyakRightSection.jsx
import React from "react";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import ChungyakScore from "./ChungyakScore";
import ChungyakList from "./ChangyakList";

const ChungyakRightSection = () => {
  return (
    <div style={{}}>
      <ChungyakScore/>
      <ChungyakList/>
    </div>
  );
};

export default ChungyakRightSection;
