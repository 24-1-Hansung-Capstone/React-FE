// src/Components/ScrollContainerMid/ScrollContainerMid.jsx
import React from "react";
import ScrollContainer from "../ScrollContainer/ScrollContainer";

function ScrollContainerMid(props){
    return (
        <div style={{
            display: 'flex', // Flexbox 모델을 사용합니다.
            justifyContent: 'center', // 주 축(여기서는 수평 축)을 기준으로 중앙 정렬합니다.
        }}>
            <ScrollContainer></ScrollContainer>
        </div>
    )
}

export default ScrollContainerMid;