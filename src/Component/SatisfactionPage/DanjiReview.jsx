import React, {useEffect, useState} from "react"
import DanjiReviewStars from "./DanjiReviewStars"
import DanjiDetailReview from "./DanjiDetailReview"
import style from "./style/DanjiReviewStyle"

function DanjiReview({ danjiData }) {
    const [selectedDesc, setSelectedDesc] = useState(danjiData.totalDesc)
        
    return (
        <div style = {style.item}>
            <DanjiReviewStars setSelectedDesc = {setSelectedDesc}
                danjiData = {danjiData}
            />
            <DanjiDetailReview desc = {selectedDesc}/>
        </div>
    )
}

export default DanjiReview