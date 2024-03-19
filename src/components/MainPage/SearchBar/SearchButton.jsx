// src/components/SearchBar/SearchButton.jsx
import React, { useState } from 'react';
import SearchButtonImg from "../../../assets/SearchButton.png"

//돋보기 버튼 만들기
const SearchButton = (props) => {

  return (
    <div>
        <img width="28" height="28" src={SearchButtonImg} alt="Search_Button" onClick={props.goNavigate}/>
    </div>
  );
}

export default SearchButton;