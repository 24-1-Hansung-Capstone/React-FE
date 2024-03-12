// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import SearchButtonImg from "./SearchButtonpng.png";

const SearchButton = (props) => {

  return (
    <div>
        <img width="28" height="28" src={SearchButtonImg} alt="Search_Button" onClick={props.goNavigate}/>
    </div>
  );
}

export default SearchButton;