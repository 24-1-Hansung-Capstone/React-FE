// SearchResultPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../Menubar/Menubar";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";
import Logo from "../Logo/Logo";
import CategoryButton from "../CategoryButton/CategoryButton";
import ToggleMenu from "../ToggleMenu/ToggleMenu";

function SearchResultPage() {
    const { searchTerm } = useParams();

    return (
        <div>
            <MenuBar />
            <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginLeft: "20px" }}>
                <Logo />
                <SmallSearchBar />
            </div>
            
            <div>
                <div style={{ display: "flex", justifyContent: "left", marginBottom: "10px", borderBottom: "2px solid black", paddingBottom: "10px" }}>
                    <CategoryButton>1</CategoryButton>
                    <CategoryButton>2</CategoryButton>
                    <CategoryButton>3</CategoryButton>
                    <CategoryButton>4</CategoryButton>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ width: "50%", padding: "20px" }}>
                    <div style={{ marginTop: "20px", borderBottom: "1px solid gray", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                        <ToggleMenu context="뉴스" />
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "100px" }}>
                        <ToggleMenu context="블로그" />
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "100px" }}>
                        <ToggleMenu context="관광지" />
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "100px" }}>
                        <ToggleMenu context="범죄율" />
                    </div>
                </div>
                <div style={{ width: "50%", padding: "20px" }}>
                    <h2>{searchTerm}</h2>
                </div>
            </div>
        </div>
    );
}

export default SearchResultPage;
