import React from "react";
import MapViwer from "../MapViewer/MapViewer"

function ScrollItem(props){
    return (
        <div style={{
            marginTop:"30px",
            marginLeft: "100px",
        }}>
            <h2 style={{
                textAlign: "left"
            }}>
                오늘의 매물🏡</h2>
            <div>
                여기에 Mapviewer, StarViewer, pictureViewer, QuestionForm 들어감
                임지우 코딩 ㄱ
            </div>
        </div>
    )
}

export default ScrollItem;