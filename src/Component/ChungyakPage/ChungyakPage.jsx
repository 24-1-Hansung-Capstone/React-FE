// src/Components/ChungyakPage/ChungyakPage.jsx
import React, { useEffect, useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import ChungyakLeftSection from "./ChungyakLeftSection";
import ChungyakRightSection from "./ChungyakRightSection";
import style from "./style/ChangyakPageStyle"

function ChungyakPage( { isLoggedIn, setIsLoggedIn }) {


  return (
    <div>
      <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div style={style.page}>
        <ChungyakLeftSection />
        <ChungyakRightSection />
      </div>
    </div>
  );
}
export default ChungyakPage;
