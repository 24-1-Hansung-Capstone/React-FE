import React from "react";

function DanjiDetailReview({ desc }) {
    return (
        <div style={{
            width : "40vh",
            padding: "0vh 1vh",
            fontSize: "20px",
            lineHeight: "1.6",
        }}>
            {desc}
        </div>
    );
}

export default DanjiDetailReview;
