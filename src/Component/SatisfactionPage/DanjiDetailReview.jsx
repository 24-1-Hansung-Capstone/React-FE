import React from "react";

function DanjiDetailReview({ desc }) {
    return (
        <div style={{
            width : "35vh",
            padding: "0vh 2vh",
            fontSize: "22px",
            lineHeight: "1.6",
        }}>
            {desc}
        </div>
    );
}

export default DanjiDetailReview;
