import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { authService } from '../../firebase/fbInstance';
import "./styles.css";

const styles = {
  menuBar: {
    height: "20px",
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
    color: "#BFDEE0",
    textDecoration: "none",
    fontSize: "20px",
  },
  activeLink: {
    color: "#BFDEE0",
  }
};

function MenuBar({ setIsLoggedIn, isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
      signOut(authService).then(() => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userData");
        navigate("/");
      }).catch((error) => {
        console.error("Error signing out:", error);
      });
    };
  
  console.log(isLoggedIn);
  const css = `.link:hover {
    display: inline-block;
    padding: 0px 20px;
    background-color: #BFDEE0;
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
          onClick={handleLogout}
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
