// src/Components/Menubar/Menubar.jsx
import React from 'react';

// 스타일 정의
const styles = {
    menuBar: {
        top: 0, // 최상단
        left: 0, // 좌측에서 시작
        display: 'flex', // 내부 항목을 flex로 정렬
        justifyContent: 'space-around', // 항목 간 공간 동일하게 배분
        padding: '10px', // 상하 패딩
        zIndex: 1000, // 다른 요소들 위에 보이도록 z-index 설정
        borderBottom: '3px solid #92baff', // 아래쪽에만 테두리 추가
        
    },
    link: {
        color: '#191D21', // 링크 색상
        textDecoration: 'none', // 밑줄 없앰
        fontFamily: "Roboto", // Roboto 글꼴을 적용합니다.
        fontWeight: 'bold', // 볼드체로 설정
        fontSize : '15px'
    },
    login: {
        color: '#191D21', // 링크 색상
        textDecoration: 'none', // 밑줄 없앰
        fontFamily: "Roboto", // Roboto 글꼴을 적용합니다.
        fontWeight: 'bold' // 볼드체로 설정
    }
};


// 메뉴바 컴포넌트
function MenuBar() {
    return (
        <div style={styles.menuBar}>
            <a href="/MapPage" style={styles.link}>지도</a>
            <a href="/ChungyakPage" style={styles.link}>청약</a>
            <a href="/NewsPage" style={styles.link}>뉴스</a>
            <a href="/SatisfactionPage" style={styles.link}>매물만족도</a>
            <a href="/EstatePage" style={styles.link}>부동산 추이</a>
            <a href="/CommunityPage" style={styles.link}>홈즈 사무소</a>
            <a href="/contact" style={styles.link}>dd</a>
            <a href="/contact" style={styles.link}>dd</a>
            <a href="/contact" style={styles.link}>+</a>
            <a href="/LoginPage" style={styles.link}>로그인</a>
            {/* 더 많은 링크 추가 가능 */}
        </div>
    );
}


export default MenuBar;
