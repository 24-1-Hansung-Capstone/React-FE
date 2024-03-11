// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchButton from "./SearchButtonpng.png";
import Logo from "../../assets/logo.png"; // 로고 이미지 불러오기

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("");
  
  const navigate = useNavigate();
  const goNavigate =() =>{
    if(searchWord !== "") navigate(`/search-result/${searchWord}`)
  }
  const searchBarEnterKeyDown = (event) =>{
    if (event.key === 'Enter') {
      goNavigate();
    }
  }

  return (
    <div style={{ position: props.position, top: props.top, left: props.left, transform: props.transform, zIndex: props.zIndex }}>
      <div style = {{width:"600px", height:"45px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"20px", overflow:"hidden"}}>
        <img src={Logo} alt="Logo" style={{ width: '120px', height: '50px' }} />
        <input 
  style={{
    flex: '1',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#000',
    outline: 'none',
    backgroundColor: '#fff',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#92baff',
    borderRadius: '4px'
  }}
  placeholder='홈즈 검색 또는 지도에서 클릭' 
  onChange={(event) => { setSearchWord(event.target.value) }}
  onKeyDown={(event) => { searchBarEnterKeyDown(event) }}
/>
        <img width="28" height="28" src={SearchButton} alt="Search Button" onClick={goNavigate}/>
      </div>
    </div>
  );
}

export default SearchBar;