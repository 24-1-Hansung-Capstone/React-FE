// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import MainSearchInput from '../Mainpage/MainSearchInput';
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../Asset/Logo.png';
import MainPage from "../../Asset/style/MainPageStyle.jsx"

function Mainpage(props) {
  const [connection, setConnection] = useState("");

  const connectionTest = () => {
    axios
      .get("http://localhost:3000/")
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
      <MenuBar />
      <div  style={MainPage.mainPageBody}>
        <img src={logo} style={MainPage.logo} alt="Logo" />

        <MainSearchInput />
      </div>
    </div>
  );
}

export default Mainpage;
