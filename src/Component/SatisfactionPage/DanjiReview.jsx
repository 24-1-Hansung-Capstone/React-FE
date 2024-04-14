import React from "react"

function DanjiReview({ danjiData }) {
    return (
        <div>
            <div>😊{danjiData.totalScore}</div>
            <div>😊{danjiData.totalDesc}</div>
            
        </div>
    )
}

export default DanjiReview