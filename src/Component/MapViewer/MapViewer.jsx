// src/Components/MapViewer/MapViewer.jsx
import React from "react";

function MapViewer(props) {
    return (
        <div style={{
            borderRadius: '40px', // 모서리 반지름 설정
            width: '1000px' , // 너비 1000px
            height: '800px', // 높이 800px
            margin: '10px', // 마진 설정
            display: 'flex', // Flexbox 모델 사용
            justifyContent: 'center', // 수평 중앙 정렬
            alignItems: 'center' ,// 수직 중앙 정렬
            border: '3px solid #92baff' // 모서리에 하늘색 선 추가
        }}>
            <h2>MapViewer</h2>
        </div>
    );
}

export default MapViewer;