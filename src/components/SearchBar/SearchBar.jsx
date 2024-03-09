import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchButton from "./SearchButtonpng.png";
import Logo from "../../assets/logo.png"; // 로고 이미지 불러오기

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  
  const navigate = useNavigate();
  const goNavigate =() =>{navigate(`/search-result/${searchWord}`)}

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}>
      <div className="w-[600px] h-[43px] flex flex-row items-center justify-center gap-[20px] overflow-hidden">
        <img src={Logo} alt="Logo" style={{ width: '120px', height: '50px' }} />
        <div className="flex-1 h-[43px] flex flex-col items-start justify-between justify-center py-0 px-[8px] bg-[#fff] border-[5px] border-solid border-[#92baff] rounded-[4px]">
          <div className="w-[422px] flex flex-row items-center justify-start py-[8px] px-0">
            <input className="flex-1 text-[14px] leading-[24px] font-['Roboto'] text-[#656f77]" placeholder='홈즈 검색 또는 지도에서 클릭' onChange = { (event) => { setSearchWord(event.target.value) }}/>
          </div>
        </div>
        <img width="28" height="27" src={SearchButton} alt="Search Button" onClick={goNavigate}/>
      </div>
    </div>
  );
}

export default SearchBar;