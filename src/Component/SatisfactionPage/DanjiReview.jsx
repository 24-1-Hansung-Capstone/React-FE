// src/Components/SatisfactionPage/DanjiReview.jsx
import React, { useState } from "react";
import DanjiReviewStars from "./DanjiReviewStars";
import DanjiDetailReview from "./DanjiDetailReview";
import style from "./style/DanjiReviewStyle";
import MyResponsiveBar from "./MyResponsiveBar";
import { getSearchResult, getSentimental } from "../ShareFolder/api";

function DanjiReview({ danjiData, setReview }) {
    const [selectedDesc, setSelectedDesc] = useState(danjiData.totalDesc);

    const [barChartData, setBarChartData] = useState([
        {
            "country": "만족도",
            "negative": 50,
            "negativecolor": "hsl(163, 30%, 40%)",
            "positive": 50,
            "positivecolor": "hsl(79, 50%, 20%)",
        }
    ])
    const clickReview = desc => {
        getSentimental(desc, "nlpModel/sentimental", ([neg, pos]) => {
            setBarChartData([
                {
                    "country": "만족도",
                    "negative": (neg * 100).toFixed(2),
                    "negativecolor": "hsl(163, 30%, 40%)",
                    "positive": (pos * 100).toFixed(2),
                    "positivecolor": "hsl(79, 50%, 20%)",
                }
            ])
        });
        setReview(desc);
    }

    return (
        <div>
            <div style={style.item}>
                <DanjiReviewStars
                    setSelectedDesc={setSelectedDesc}
                    danjiData={danjiData}
                    setReview={clickReview}
                />
                <DanjiDetailReview desc={selectedDesc} />
            </div>
            <div style={{ width: '70vh', height: '15vh' }}>
                <MyResponsiveBar data={barChartData} /> 
            </div>
        </div>
    )
}

export default DanjiReview; 