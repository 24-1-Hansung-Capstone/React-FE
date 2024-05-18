// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import MainSearchInput from '../Mainpage/MainSearchInput';
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../Asset/Logo.png';
import MainPage from "./Style/MainPageStyle.jsx"
import MainSearchInputStyle from "./Style/MainSearchInputStyle.jsx"

function Mainpage(props) {
  const [connection, setConnection] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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
      <MenuBar setIsLoggedIn={setIsLoggedIn}/>
      <div style={MainPage.mainPageBody}>
        <img src={logo} style={MainPage.logo} alt="Logo" />
        <MainSearchInput style = {MainSearchInputStyle}/>
      </div>
    </div>
  );
}

export default Mainpage;
