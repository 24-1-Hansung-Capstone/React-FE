// src/Components/SatisfactionPage/SatisfactionPage.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchResult, getSentimental } from "../ShareFolder/api";
import SatisfactionBody from "./SatisfactionBody";
import SearchResultNav from "../ShareFolder/SearchResultNav";
import BarChartData from "./BarChartData";

function SatisfactionPage() {
    const [result, setResult] = useState([]);
    const [review, setReview] = useState(null);
    const { searchTerm } = useParams();


    useEffect(() => {
        getSearchResult(searchTerm, "satisfaction", setResult)
    }, [searchTerm]);



    return (
        <div>
            <SearchResultNav searchWord = {searchTerm} searchUrlPath={"SatisfactionPage"}/>
            <SatisfactionBody result={result} barChartData={BarChartData() } setReview={setReview} />
        </div>
    );
}

export default SatisfactionPage;