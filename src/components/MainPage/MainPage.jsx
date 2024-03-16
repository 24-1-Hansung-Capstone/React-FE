import {React, useState, useEffect} from 'react';
import MainMap from './MainMap/MainMap';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

const MainPage = () => {
  const [searchWord, setSearchWord] = useState("");
  
  
  const navigate = useNavigate();

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