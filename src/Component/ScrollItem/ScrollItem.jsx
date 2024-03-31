// src/Components/ScrollItem/ScrollItem.jsx
import React from "react";
import MapViewer from "../MapViewer/MapViewer";
import StarViewer from "../StarViewer/StarViewer";
import PictureViewer from "../PictureViewer/PictureViewer";
import QuestionForm from "../QuestionForm/QuestionForm";

function ScrollItem(props) {
    return (
        <div style={{
            marginTop: "30px",
            marginLeft: "30px",
        }}>
            <h2 style={{
                textAlign: "left"
            }}>
                오늘의 매물🏡</h2>
            <div style={{
                display: 'flex', // Flexbox 모델 사용
                flexDirection: 'row', // 가로 방향으로 배열
                justifyContent: 'space-evenly', // 가로 방향 중앙 정렬
                alignItems: 'center', // 세로 방향 중앙 정렬
            }}>
                <MapViewer />
                <div style={{
                    display: 'flex', // Flexbox 모델 사용
                    flexDirection: 'column', // 세로 방향으로 배열
                }}>
                    <StarViewer />
                    <PictureViewer />
                </div>
                <QuestionForm />
            </div>
        </div>
    )
}

export default ScrollItem;