// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import SearchInputMid from "../ShareFolder/SearchInputMid";
import LogoMid from "../ShareFolder/LogoMid";
import MainSearchInput from '../Mainpage/MainSearchInput';
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function Mainpage(props) {
  return (
    <div>
      <MenuBar />
      <LogoMid />
      <div style={ShareStyles.LogoMid}>
        <MainSearchInput />
      </div>
    </div>
  );
}

export default Mainpage;
