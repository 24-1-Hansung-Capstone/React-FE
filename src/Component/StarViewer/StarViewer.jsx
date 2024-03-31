// src/Components/StarViewer/StarViewer.jsx
import React from "react";

function StarViewer(props) {
    return (
        <div style={{
            backgroundColor: '#FFFFFF', // 배경색 흰색으로 변경
            borderRadius: '40px', // 모서리 반지름 설정
            width: 'calc(100% - 20px)', // 너비 100% - 20px로 변경
            height: '390px', // 높이 390px로 변경
            margin: '10px', // 마진 10px로 변경
            display: 'flex', // Flexbox 모델 사용
            justifyContent: 'center', // 수평 중앙 정렬
            alignItems: 'center', // 수직 중앙 정렬
            border: '3px solid #92baff' // 모서리에 하늘색 선 추가
        }}>
            <div style={{ fontSize: '3em' }}> {/* 별과 점수의 크기를 동일하게 설정 */}
                <span role="img" aria-label="star">⭐️</span> 4.6/5.0점 {/* 별과 점수 추가, fontSize 속성으로 크기 조절 */}
            </div>
        </div>
    );
}

export default StarViewer;
