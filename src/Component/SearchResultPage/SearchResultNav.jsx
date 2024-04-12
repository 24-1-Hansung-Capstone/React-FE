// src/Components/SearchResultPage/SearchResultNav.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import RelatedSearchWords from "./RelatedSearchWords";

function SearchResultNav({searchWord}) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.SmallSearchLogo}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
            <div style={ShareStyles.SearchResultNav}>
                <RelatedSearchWords recommendations = {recommendations}/>
            </div>
            <hr style={ShareStyles.SearchResultHr} />
        </div>
    );
}

export default SearchResultNav;