import React, {useEffect, useState} from "react"
import DanjiReviewStars from "./DanjiReviewStars"
import DanjiDetailReview from "./DanjiDetailReview"

function DanjiReview({ danjiData }) {
    const [selectedDesc, setSelectedDesc] = useState(danjiData.totalDesc)
        
    return (
        <div style = {{
            marginBottom : "20px"
            
        }}>
            <DanjiReviewStars setSelectedDesc = {setSelectedDesc}
                danjiData = {danjiData}
            />
            <DanjiDetailReview desc = {selectedDesc}/>
        </div>
    )
}

export default DanjiReview