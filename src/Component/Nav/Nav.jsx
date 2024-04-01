// src/Components/Nav/Nav.jsx
import React from "react";
import MenuBar from "../Menubar/Menubar";
import Logo from "../Logo/Logo";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";
import ShareStyles from "../ShareStyles/ShareStyles";
import SearchRecommend from "../SearchRecommend/SearchRecommend";

function Nav() {
    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.container}>
                <Logo />
                <SmallSearchBar />
            </div>
            <div style={ShareStyles.Nav}>
                <SearchRecommend />
                
            </div>
            <hr style={ShareStyles.hrStyle} />
        </div>
    );
}

export default Nav;
