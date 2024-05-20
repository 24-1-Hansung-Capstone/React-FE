// src/Components/EstatePage/EstatePage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";

function EstatePage({searchWord, isLoggedIn, setIsLoggedIn}) {

    return (
        <div>
            <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div style={{}}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
        </div>
    );
}

export default EstatePage;