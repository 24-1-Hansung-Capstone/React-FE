// src/Components/SearchResultNav/SearchResultNav.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import SearchRecommend from "./SearchRecommend";

function SearchResultNav({searchWord}) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.container}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
            <div style={ShareStyles.SearchResultNav}>
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

export default SearchResultNav;