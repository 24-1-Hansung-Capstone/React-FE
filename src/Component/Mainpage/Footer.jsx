import React from "react";
import logo from "../../Asset/GithubLogo.png";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#3E6367",
    color: "#fff",
    padding: "10vh 0",
    position: "fixed",
    bottom: 0,
    width: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

  };

  const sectionStyle = {
    flex: 1,
    textAlign: "center",
  };

  const pStyle = {
    margin: "5px 0",
    whiteSpace: "nowrap",
  };

  const logoStyle = {
    width: "3%",
    margin: "0 100px",
  };

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div style={footerStyle}>
      <div style={sectionStyle}>
        <p style={pStyle}>Copyright© 찾아줘! 홈즈</p>
      </div>
      <div style={sectionStyle}>
        <p style={pStyle}>오류 제보 및 문의 : sjlee9908@naver.com</p>
      </div>
      <div style={sectionStyle}>
        <p style={pStyle}>CONTACT : 010-1234-5678</p>
      </div>
      <img src={logo} alt="Logo" style={logoStyle} onClick={() => handleOpenNewTab("https://github.com/24-1-Hansung-Capstone")} />
    </div>
  );
};

export default Footer;
