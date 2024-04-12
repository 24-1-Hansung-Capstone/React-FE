// src/Components/ChungyakPage/ChungyakLeftSection.jsx
import React from "react";
import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import ChungyakSearchInput from "./ChungyakSearchInput";

const ChungyakLeftSection = () => {
  return (
    <div style={ShareStyles.CommonLeftPage}>
      <SmallLogoMid />
      <ChungyakSearchInput />
    </div>
  );
};

export default ChungyakLeftSection;
