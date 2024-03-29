import React from 'react';


// 스타일 정의
const styles = {
    menuBar: {
        top: 0, // 최상단
        left: 0, // 좌측에서 시작
        width: '100%', // 너비 100%
        display: 'flex', // 내부 항목을 flex로 정렬
        justifyContent: 'space-around', // 항목 간 공간 동일하게 배분
        padding: '10px', // 상하 패딩
        zIndex: 1000, // 다른 요소들 위에 보이도록 z-index 설정
    },
    link: {
        color: '#191D21', // 링크 색상
        textDecoration: 'none', // 밑줄 없앰
        padding: '0 10px', // 좌우 패딩
        fontFamily: "Roboto", // Roboto 글꼴을 적용합니다.
        fontWeight: 'bold' // 볼드체로 설정
    }
};


// 메뉴바 컴포넌트
function MenuBar() {
    return (
        <div style={styles.menuBar}>
            <a href="/" style={styles.link}>지도</a>
            <a href="/about" style={styles.link}>청약</a>
            <a href="/contact" style={styles.link}>뉴스</a>
            <a href="/contact" style={styles.link}>매물만족도</a>
            <a href="/contact" style={styles.link}>부동산동향</a>
            <a href="/contact" style={styles.link}>홈즈사무소</a>
            <a href="/contact" style={styles.link}> </a>
            <a href="/contact" style={styles.link}> </a>
            <a href="/contact" style={styles.link}> </a>
            <a href="/contact" style={styles.link}> </a>
            <a href="/contact" style={styles.link}>로그인</a>
            {/* 더 많은 링크 추가 가능 */}
        </div>
    );
}


export default MenuBar;
