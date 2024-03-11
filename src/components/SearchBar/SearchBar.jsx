import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchButton from "./SearchButtonpng.png";
import Logo from "../../assets/logo.png"; // 로고 이미지 불러오기

const SearchBar = () => {
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
    <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}>
      <div style = {{width:"600px", height:"45px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"20px", overflow:"hidden"}}>
        <img src={Logo} alt="Logo" style={{ width: '120px', height: '50px' }} />
        <div style={{ height: '45px',  backgroundColor: '#fff',  borderWidth: '5px',  borderStyle: 'solid',  borderColor: '#92baff',  borderRadius: '4px'}}>
        <div style={{width: '425px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input style={{flex: '1',fontSize: '14px',lineHeight: '24px',color: '#000', outline:"None"}} placeholder='홈즈 검색 또는 지도에서 클릭' 
            onChange = { (event) => { setSearchWord(event.target.value) }}
            onKeyDown={(event) => {searchBarEnterKeyDown(event)}}
            />
          </div>
        </div>
        <img width="28" height="28" src={SearchButton} alt="Search Button" onClick={goNavigate}/>
      </div>
    </div>
  );
}

export default SearchBar;