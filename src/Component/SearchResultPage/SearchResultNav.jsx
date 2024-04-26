// src/Components/SearchResultPage/SearchResultNav.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import RelatedSearchWords from "./RelatedSearchWords";

function SearchResultNav({searchWord}) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style={{}}>
                <Logo />
                <SmallSearchBar searchWord = {searchWord}/>
            </div>
            <div style={{}}>
                <RelatedSearchWords recommendations = {recommendations}/>
            </div>
            <hr style={{}} />
        </div>
    );
}

export default SearchResultNav;