// src/Components/SatisfactionPage/SatisfactionPage.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchResult, getSentimental } from "../ShareFolder/api";
import SatisfactionBody from "./SatisfactionBody";
import SearchResultNav from "../ShareFolder/SearchResultNav";

function SatisfactionPage({isLoggedIn, setIsLoggedIn}) {
    const [result, setResult] = useState([]);
    const [review, setReview] = useState(null);
    const { searchTerm } = useParams();
    /** 오탈자를 고려하여 새로운 입력을 제안함 true일때만 추천하면 됨. */
    const [isQueryChanged , setIsQueryChanged] = useState(false);

    /** 제안하는 검색어 */
    const [suggestQuery, setSuggestQuery] = useState("")

    useEffect(() => {
        getSearchResult(searchTerm, "satisfaction", (res, isQueryChanged , suggest) => {
            setResult(res)
            setIsQueryChanged(isQueryChanged)
            if (isQueryChanged ) {
                setSuggestQuery(suggest)
            }
        })
        console.log(`수정 제안 : ${ isQueryChanged ? suggestQuery : "사실 멀쩡하심"}`)
    }, [searchTerm]);


    return (
        <div>
            <SearchResultNav searchWord={searchTerm} searchUrlPath={"SatisfactionPage"} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <SatisfactionBody result={result} setReview={setReview} />
        </div>
    );
}

export default SatisfactionPage;