// src/Components/NewsPage/NewsPage.jsx
import React from "react";
import MenuBar from "../Menubar/Menubar";
import Logo from "../Logo/Logo";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function NewsPage({searchWord}) {

    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.container}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
        </div>
    );
}

export default NewsPage;