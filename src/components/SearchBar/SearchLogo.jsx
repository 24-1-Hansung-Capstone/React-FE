// src/components/SearchBar/SearchLogo.jsx
import React, { useState } from 'react';
import Logo from "../../assets/logo.png"; // 로고 이미지 불러오기

const searchLogo = (props) => {

  return (
    <div>
        <img src={Logo} alt="Logo" style={{ width: '110px', height: '50px' }} />
    </div>
  );
}

export default searchLogo;