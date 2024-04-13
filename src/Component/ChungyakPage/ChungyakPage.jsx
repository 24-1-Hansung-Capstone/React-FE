// src/Components/ChungyakPage/ChungyakPage.jsx
import React, { useEffect } from "react";
import MenuBar from "../ShareFolder/Menubar";
import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import ChungyakSearchInput from "./ChungyakSearchInput";
import ChungyakLeftSection from "./ChungyakLeftSection";
import ChungyakRightSection from "./ChungyakRightSection";

function ChungyakPage() {
  return (
    <div>
    <div>
      <MenuBar/>
    </div>
    <div style={ShareStyles.CommonPageDivide}>
      <div style={ShareStyles.CommonLeftPage}>
        <ChungyakLeftSection />
    </div>
    <div style={ShareStyles.CommonRightPage}>
        <ChungyakRightSection />
      </div>
    </div>
    </div>
  );
}
export default ChungyakPage;
