// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import SearchInputMid from '../ShareFolder/SearchInputMid'
import LogoMid from "../ShareFolder/LogoMid";

function Mainpage(props){
    return(
        <div>
            <MenuBar></MenuBar>
            <LogoMid></LogoMid>
            <SearchInputMid></SearchInputMid>

        </div>
    )
}

export default Mainpage;