// src/Components/SearchResultPage/SearchResultNav.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import RelatedSearchWords from "./RelatedSearchWords";

function SearchResultNav({searchWord}) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style={{...PageStyles.SmallSearchLogo, ...ComponentStyles.SmallSearchLogo}}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
            <div style={PageStyles.SearchResultNav}>
                <RelatedSearchWords recommendations = {recommendations}/>
            </div>
            <hr style={ComponentStyles.SearchResultHr} />
        </div>
    );
}

export default SearchResultNav;