// src/Components/SatisfactionPage/SatisfactionPage.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../ShareFolder/Menubar";
import { getSearchResult } from "../ShareFolder/api";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import SatisfactionBody from "./SatisfactionBody";
import SearchInput from "../ShareFolder/SearchInput";

function SatisfactionPage() {
    const [result, setResult] = useState([]);
    const { searchTerm } = useParams();
    

    useEffect(() => {
        getSearchResult(searchTerm, "satisfaction", setResult)
    }, [searchTerm]);


    return (
        <div>
            <MenuBar />
            <div style={ShareStyles.SmallSearchLogo}>
                <Logo />
                <SearchInput searchWord = {searchTerm} searchUrlPath={"SatisfactionPage"}/>
            </div>
            <hr/>
            <SatisfactionBody result = {result}/>
        </div>
    );
}

export default SatisfactionPage;