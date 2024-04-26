// src/Components/ChungyakPage/ChungyakPage.jsx
import React, { useEffect, useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import ChungyakSearchInput from "./ChungyakSearchInput";
import ChungyakLeftSection from "./ChungyakLeftSection";
import ChungyakRightSection from "./ChungyakRightSection";
import axios from "axios";

function ChungyakPage() {


  return (
    <div>
    <div>
      <MenuBar/>
    </div>
    <div style={{}}>
      <div style={{}}>
        <ChungyakLeftSection />
    </div>
    <div style={{}}>
        <ChungyakRightSection/>
      </div>
    </div>
    </div>
  );
}
export default ChungyakPage;
