// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchLogo from './SearchLogo';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("");
  
  const navigate = useNavigate();

  const goNavigate = () => {
    if (searchWord !== "") navigate(`/search-result/${searchWord}`);
  };

  return (
    <div style={{ position: props.position, top: props.top, left: props.left, transform: props.transform, zIndex: props.zIndex }}>
      <div style={{ width: "700px", height: "45px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden", backgroundColor: "#fff", borderColor: '#92baff', borderWidth: '5px', borderStyle: 'solid', borderRadius: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <SearchLogo />
          <SearchInput setSearchWord={setSearchWord} goNavigate={goNavigate} />
        </div>
        <SearchButton goNavigate={goNavigate} />
      </div>
    </div>
  );
};

export default SearchBar;
