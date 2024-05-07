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
    
    const [pieChartData, setPieCharData] = useState([
        { id: '부정', value: 0.09693499, label: '부정' },
        { id: '긍정', value: 0.903065, label: '긍정' }
    ])

    useEffect(() => {
        getSearchResult(searchTerm, "satisfaction", setResult)
    }, [searchTerm]);

    const clickReview = desc => {
        getSentimental(desc, "nlpModel/sentimental", ([neg, pos, res]) => {
            setPieCharData([
                { id: '부정', value: neg, label: '부정' },
                { id: '긍정', value: pos, label: '긍정' }
            ])
        });
        setReview(desc);
    }

    return (
        <div>
            <SearchResultNav searchWord = {searchTerm} searchUrlPath={"SatisfactionPage"}/>
            <SatisfactionBody result = {result} setReview={clickReview} pieChartData={pieChartData}/>
        </div>
    );
}

export default SatisfactionPage;