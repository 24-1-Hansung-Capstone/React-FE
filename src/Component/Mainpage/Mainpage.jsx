// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import SearchInputMid from "../ShareFolder/SearchInputMid";
import LogoMid from "../ShareFolder/LogoMid";
import MainSearchInput from '../Mainpage/MainSearchInput';
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function Mainpage(props) {
  return (
    <div>
      <MenuBar />
      <LogoMid />
      <div style={{...PageStyles.LogoMid, ...ComponentStyles.LogoMid}}>
        <MainSearchInput />
      </div>
    </div>
  );
}

export default Mainpage;
