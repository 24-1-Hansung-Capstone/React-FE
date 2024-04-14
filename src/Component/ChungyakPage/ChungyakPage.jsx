// src/Components/ChungyakPage/ChungyakPage.jsx
import React, { useEffect } from "react";
import MenuBar from "../ShareFolder/Menubar";
import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import ChungyakSearchInput from "./ChungyakSearchInput";
import ChungyakLeftSection from "./ChungyakLeftSection";
import ChungyakRightSection from "./ChungyakRightSection";

function ChungyakPage() {
  return (
    <div>
    <div>
      <MenuBar/>
    </div>
    <div style={{...PageStyles.CommonPageDivide, ...ComponentStyles.CommonPageDivide}}>
      <div style={{...PageStyles.CommonLeftPage, ...ComponentStyles.CommonLeftPage}}>
        <ChungyakLeftSection />
    </div>
    <div style={{...PageStyles.CommonRightPage, ...ComponentStyles.CommonRightPage}}>
        <ChungyakRightSection />
      </div>
    </div>
    </div>
  );
}
export default ChungyakPage;
