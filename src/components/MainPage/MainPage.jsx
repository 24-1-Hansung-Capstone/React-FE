// src/components/MainPage/MainPage.jsx

import React from 'react';
import MainMap from '../MainMap/MainMap';
import SearchBar from '../SearchBar/SearchBar';

const MainPage = () => {
  return (
    <React.StrictMode>
      <MainMap />
      <SearchBar position='absolute' top='10%'  left='50%'  transform='translate(-50%, -50%)' zIndex= '9999'/>
    </React.StrictMode>
  );
}

export default MainPage;