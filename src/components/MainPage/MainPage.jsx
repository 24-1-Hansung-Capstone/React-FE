// src/components/MainPage/MainPage.jsx

import React from 'react';
import MainMap from '../MainMap/MainMap';
import SearchBar from '../SearchBar/SearchBar';

const MainPage = () => {
  return (
    <React.StrictMode>
      <MainMap />
      <SearchBar />
    </React.StrictMode>
  );
}

export default MainPage;
