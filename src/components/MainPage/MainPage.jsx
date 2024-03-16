import {React, useState, useEffect} from 'react';
import MainMap from './MainMap/MainMap';
import { useNavigate } from 'react-router-dom';
import useScript from '../useScript';
import SearchBar from './SearchBar/SearchBar';

const MainPage = () => {
  const [searchWord, setSearchWord] = useState("");
  //const [loading, error] = useScript("//dapi.kakao.com/v2/maps/sdk.js?appkey=96d9661a9600babfc4d3051bdfc0395c&libraries=services&autoload=false");
  
  
  const navigate = useNavigate();

  const goNavigate = () => {
    if (searchWord !== "") navigate(`/search-result/${searchWord}`);
  };

  // if (error) return <p>오류!</p>;
  // if (loading) return <p>로딩 중 ...</p>;
  return (
      <div>
        <MainMap />
        <SearchBar 
        position='absolute' top='10%'  left='50%'  transform='translate(-50%, -50%)' zIndex= '9999' searchWord = {searchWord} 
        setSearchWord = {setSearchWord} goNavigate = {goNavigate}/>
      </div>
  );
}

export default MainPage;