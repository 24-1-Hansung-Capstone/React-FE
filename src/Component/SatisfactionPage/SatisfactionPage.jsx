// src/Components/SatisfactionPage/SatisfactionPage.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchResult, getSentimental } from "../ShareFolder/api";
import SatisfactionBody from "./SatisfactionBody";
import SearchResultNav from "../ShareFolder/SearchResultNav";

function SatisfactionPage() {
    const [result, setResult] = useState([]);
    const [review, setReview] = useState(null);
    const { searchTerm } = useParams();
    
    const barChartData = [
        {
            "country": "만족도",
            "negative": 9,
            "negativecolor": "hsl(163, 30%, 40%)",
            "positive": 91,
            "positivecolor": "hsl(79, 50%, 20%)",
        },

    ];

    useEffect(() => {
        getSearchResult(searchTerm, "satisfaction", setResult)
    }, [searchTerm]);



    return (
        <div>
            <SearchResultNav searchWord = {searchTerm} searchUrlPath={"SatisfactionPage"}/>
            <SatisfactionBody result = {result} barChartData={barChartData}/>
        </div>
    );
}

export default SatisfactionPage;