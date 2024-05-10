import React, {useEffect, useState} from "react"
import DanjiReviewStars from "./DanjiReviewStars"
import DanjiDetailReview from "./DanjiDetailReview"
import style from "./style/DanjiReviewStyle"
import MyResponsiveBar from "./MyResponsiveBar";
import BarChartData from "./BarChartData";

function DanjiReview({ danjiData, setReview }) {
    const [selectedDesc, setSelectedDesc] = useState(danjiData.totalDesc)
    const barChartData = BarChartData(); 
    return (
        <div>
        <div style = {style.item}>
            <DanjiReviewStars setSelectedDesc = {setSelectedDesc}
                danjiData = {danjiData}
                setReview = {setReview}
            />
            <DanjiDetailReview desc = {selectedDesc}/>
        </div>
        <div style={{ width: '700px', height: '180px' }}>
        <MyResponsiveBar data={barChartData} />
        </div>
        </div>
    )
}

export default DanjiReview