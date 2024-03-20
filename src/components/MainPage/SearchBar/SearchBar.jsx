// src/components/SearchBar/SearchBar.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchLogo from './SearchLogo';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = (props) => {
  const navigate = useNavigate();

  const goSearchResultPageNavigate = () => {
    if (props.searchWord !== "") navigate(`/search-result/${props.searchWord}`);
  };

  const goMainPageNavigate = () => {
    if (props.searchWord !== "") navigate(`/`);
  };

  //검색창 만들기
  return (
    <div style={{ position: props.position, top: props.top, left: props.left, transform: props.transform, zIndex: props.zIndex }}>
      <div style={{ width: "700px", height: "45px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden", backgroundColor: "#fff", borderColor: '#92baff', borderWidth: '5px', borderStyle: 'solid', borderRadius: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <SearchLogo goNavigate = {goMainPageNavigate}/>
          <SearchInput searchWord={props.searchWord} setSearchWord={props.setSearchWord} goNavigate={goSearchResultPageNavigate} />
        </div>
        <SearchButton goNavigate={goSearchResultPageNavigate} />
      </div>
    </div>
  );
};

export default SearchBar;
