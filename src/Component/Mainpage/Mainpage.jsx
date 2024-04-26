// src/Components/Mainpage/Mainpage.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import SearchInputMid from "../ShareFolder/SearchInputMid";
import LogoMid from "../ShareFolder/LogoMid";
import MainSearchInput from '../Mainpage/MainSearchInput';
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <LogoMid />
      <div style={{...PageStyles.LogoMid, ...ComponentStyles.LogoMid}}>
        <MainSearchInput />
      </div>
      {/* <p>{connection}</p> */}
    </div>
  );
}

export default Mainpage;
