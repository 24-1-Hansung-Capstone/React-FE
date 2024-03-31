import React from "react";
import picture from "../../Asset/image12.png"; // 이미지 임포트

function PictureViewer(props) {
    const handleClick = () => {
        window.location.href = "http://localhost:3000/RecommendTouristDestination";
    };

    return (
        <a href="http://localhost:3000/RecommendTouristDestination" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
                borderRadius: '40px', // 모서리 반지름 설정
                width: 'calc(100% - 20px)', // 너비를 부모 컨테이너에 꽉 차도록 설정
                height: 'auto', // 높이를 자동으로 설정하여 이미지의 비율 유지
                margin: '10px', // 마진 설정
                display: 'flex', // Flexbox 모델 사용
                justifyContent: 'center', // 수평 중앙 정렬
                alignItems: 'center', // 수직 중앙 정렬
                border: '3px solid #92baff', // 모서리에 하늘색 선 추가
                cursor: 'pointer' // 포인터 커서로 변경
            }} onClick={handleClick}>
                <img src={picture} alt="이미지" style={{ maxWidth: '70%', maxHeight: '70%', borderRadius: '40px' }} /> {/* 이미지 추가 */}
            </div>
        </a>
    );
}

export default PictureViewer;
