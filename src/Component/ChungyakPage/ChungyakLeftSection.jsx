// src/Components/ChungyakPage/ChungyakLeftSection.jsx
import React from "react";
import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import ChungyakSearchInput from "./ChungyakSearchInput";

const ChungyakLeftSection = () => {
  return (
    <div style={{...PageStyles.CommonLeftPage, ...ComponentStyles.CommonLeftPage}}>
      <SmallLogoMid />
      <ChungyakSearchInput />
    </div>
  );
};

export default ChungyakLeftSection;
