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
      <MenuBar />
      <div style={ShareStyles.LeftPageStyle}>
        <ChungyakLeftSection />
        <ChungyakRightSection />
      </div>
    </div>
  );
}
export default ChungyakPage;
