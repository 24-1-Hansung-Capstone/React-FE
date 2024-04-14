// src/Components/ChungyakPage/ChungyakRightSection.jsx
import React from "react";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

const ChungyakRightSection = () => {
  return (
    <div style={{...PageStyles.ChungyakRightSection, ...ComponentStyles.ChungyakRightSection}}>
      <div style={{ width: "50%" }}>
        <h2>ㅎㅇ</h2>
      </div>
      <div style={{ width: "50%" }}>
        <h2>ㅂㅇ</h2>
      </div>
    </div>
  );
};

export default ChungyakRightSection;
