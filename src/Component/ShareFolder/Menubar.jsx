// src/Components/ShareFolder/Menubar.jsx
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

// 스타일 정의
const styles = {
  menuBar: {
    top: 0, // 최상단
    left: 0, // 좌측에서 시작
    display: "flex", // 내부 항목을 flex로 정렬
    justifyContent: "space-around", // 항목 간 공간 동일하게 배분
    padding: "10px", // 상하 패딩
    zIndex: 1000, // 다른 요소들 위에 보이도록 z-index 설정
    borderBottom: "1px solid ", // 아래쪽에만 테두리 추가
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' // 수평, 수직 그림자 위치 및 흐림 정도 및 색상 지정
  },
  link: {
    color: "#191D21", // 링크 색상
    textDecoration: "none", // 밑줄 없앰
    fontFamily: "Roboto", // Roboto 글꼴을 적용합니다.
    fontSize: "12px",
  },
  activeLink: {
    color: "#6392ff", // 활성 링크 색상
  }
};

// 메뉴바 컴포넌트
function MenuBar() {
  return (
    <div style={styles.menuBar}>
      <NavLink
        className="link"
        activeClassName="active"
        to="/">
        메인 화면
      </NavLink>

      <NavLink
        className="link"
        activeClassName="active"
        to="/MapPage">
        지도
      </NavLink>

      <NavLink
        className="link"
        activeClassName="active"
        to="/ChungyakPage">
        청약
      </NavLink>

      <NavLink
        className="link"
        activeClassName="active"
        to="/SatisfactionPage/검색어입력">
        매물만족도
      </NavLink>

      <NavLink
        className="link"
        activeClassName="active"
        to="/CommunityPage">
        홈즈 사무소
      </NavLink>

      <NavLink
        className="link"
        activeClassName="active"
        to="/SignUpPage">
        회원 가입
      </NavLink>

      <NavLink
        className="link"
        activeClassName="active"
        to="/LoginPage">
        로그인
      </NavLink>
    </div>
  );
}

export default MenuBar;
