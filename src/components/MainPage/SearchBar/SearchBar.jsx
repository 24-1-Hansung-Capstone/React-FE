// src/components/SearchBar/SearchBar.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchLogo from './SearchLogo';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = (props) => {
  const navigate = useNavigate();

  const goNavigate = () => {
    if (props.searchWord !== "") navigate(`/search-result/${props.searchWord}`);
  };

  //검색창 만들기
  return (
    <div style={{ position: props.position, top: props.top, left: props.left, transform: props.transform, zIndex: props.zIndex }}>
      <div style={{ width: "700px", height: "45px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden", backgroundColor: "#fff", borderColor: '#92baff', borderWidth: '5px', borderStyle: 'solid', borderRadius: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <SearchLogo />
          <SearchInput searchWord={props.searchWord} setSearchWord={props.setSearchWord} goNavigate={goNavigate} />
        </div>
        <SearchButton goNavigate={goNavigate} />
      </div>
    </div>
  );
};

export default SearchBar;
