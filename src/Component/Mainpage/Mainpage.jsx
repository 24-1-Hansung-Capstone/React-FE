// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../Menubar/Menubar";
import SearchInputMid from '../SearchInputMid/SearchInputMid'
import LogoMid from "../LogoMid/LogoMid";
import ScrollContainerMid from "../ScrollContainerMid/ScrollContainerMid";

function Mainpage(props){
    return(
        <div>
            <MenuBar></MenuBar>
            <LogoMid></LogoMid>
            <SearchInputMid></SearchInputMid>
            <ScrollContainerMid></ScrollContainerMid>

        </div>
    )
}

export default Mainpage;