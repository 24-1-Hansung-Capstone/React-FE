import React, {useEffect, useState} from "react"
import DanjiReviewStars from "./DanjiReviewStars"
import DanjiDetailReview from "./DanjiDetailReview"
import style from "./style/DanjiReviewStyle"

function DanjiReview({ danjiData, setReview }) {
    const [selectedDesc, setSelectedDesc] = useState(danjiData.totalDesc)
        
    return (
        <div style = {style.item}>
            <DanjiReviewStars setSelectedDesc = {setSelectedDesc}
                danjiData = {danjiData}
                setReview = {setReview}
            />
            <DanjiDetailReview desc = {selectedDesc}/>
        </div>
    )
}

export default DanjiReview