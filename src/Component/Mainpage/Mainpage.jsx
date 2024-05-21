// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import MainSearchInput from '../Mainpage/MainSearchInput';
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../Asset/GIFLogo.gif';
import MainPage from "./Style/MainPageStyle.jsx"
import MainSearchInputStyle from "./Style/MainSearchInputStyle.jsx"
import Footer from "./Footer.jsx";
import logoTitle from '../../Asset/LogoTitle.png';

function Mainpage( {props, setIsLoggedIn, isLoggedIn} ) {
  const [connection, setConnection] = useState("");
  
  const connectionTest = () => {
    axios
      .get("http://13.125.234.8:3000/")
      .then((response) => {
        setConnection(response.data);
      })
      .catch((error) => {
        setConnection(error.message);
      });
  };

  useEffect(() => {
    connectionTest();
  }, []);

  return (
    <div>
      <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div style={MainPage.mainPageBody}>
        <img src={logoTitle} style={MainPage.logoTitle} alt="LogoTitle" />
        <img src={logo} style={MainPage.logo} alt="Logo" />
        <MainSearchInput style = {MainSearchInputStyle}/>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
