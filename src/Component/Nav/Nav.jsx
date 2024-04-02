// src/Components/Nav/Nav.jsx
import React from "react";
import MenuBar from "../Menubar/Menubar";
import Logo from "../Logo/Logo";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";
import ShareStyles from "../ShareStyles/ShareStyles";
import SearchRecommend from "../SearchRecommend/SearchRecommend";

function Nav() {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.container}>
                <Logo />
                <SmallSearchBar />
            </div>
            <div style={ShareStyles.Nav}>
                <div style={ShareStyles.container}>
                    {recommendations.map((recommendation, index) => (
                        <SearchRecommend key={index} recommendation={recommendation} />
                    ))}
                </div>
            </div>
            <hr style={ShareStyles.hrStyle} />
        </div>
    );
}

export default Nav;