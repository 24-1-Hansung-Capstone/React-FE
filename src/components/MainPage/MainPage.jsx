import {React, useState, useEffect} from 'react';
import MainMap from './MainMap/MainMap';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

// 메인 페이지 제작
const MainPage = () => {
  const [searchWord, setSearchWord] = useState("");
  
  const navigate = useNavigate();

  // 입력받은 검색어에 따라 /search-results의 하위 도메인으로 이동.
  const goNavigate = () => {
    if (searchWord !== "") navigate(`/search-result/${searchWord}`);
  };

  return (
      <div>
        <MainMap setSearchWord = {setSearchWord}/>
        <SearchBar 
        position='absolute' top='10%'  left='50%'  transform='translate(-50%, -50%)' zIndex= '9999' searchWord = {searchWord} 
        setSearchWord = {setSearchWord} goNavigate = {goNavigate}/>
      </div>
  );
}

export default MainPage;