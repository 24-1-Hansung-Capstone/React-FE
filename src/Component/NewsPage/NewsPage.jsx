// src/Components/NewsPage/NewsPage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function NewsPage({searchWord}) {

    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.SmallSearchLogo}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
        </div>
    );
}

export default NewsPage;