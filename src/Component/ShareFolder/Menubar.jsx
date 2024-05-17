import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const styles = {
  menuBar: {
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    zIndex: 1000,
    borderBottom: "1px solid ",
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  link: {
    color: "#191D21",
    textDecoration: "none",
    fontSize: "20px",
  },
  activeLink: {
    color: "#6392ff",
  }
};

function MenuBar({ setIsLoggedIn, isLoggedIn }) {
  console.log(isLoggedIn);
  const css = `.link:hover {
    display: inline-block;
    padding: 0px 20px;
    background-color: #9e9e9e;
  }`

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

      {isLoggedIn ? (
        <NavLink
          className="link"
          activeClassName="active"
          to="/"
          onClick={()=>{setIsLoggedIn(false)}}
        >
          로그아웃
        </NavLink>
      ) : (
        <NavLink
          className="link"
          activeClassName="active"
          to="/LoginPage"
        >
          로그인
        </NavLink>
      )}
    </div>
  );
}

export default MenuBar;
