// src/Components/NewsPage/NewsPage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function NewsPage({searchWord}) {

    return (
        <div>
            <MenuBar />
            <div style={{...PageStyles.SmallSearchLogo, ...ComponentStyles.SmallSearchLogo}}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
        </div>
    );
}

export default NewsPage;