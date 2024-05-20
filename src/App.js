// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Component/Mainpage/Mainpage';
import SearchResultPage from './Component/SearchResultPage/SearchResultPage';
import MapPage from './Component/MapPage/MapPage';
import ChungyakPage from './Component/ChungyakPage/ChungyakPage';
import SatisfactionPage from './Component/SatisfactionPage/SatisfactionPage';
import EstatePage from './Component/EstatePage/EstatePage';
import SignUpPage from "./Component/SignUpPage/SignUpPage";
import LoginPage from "./Component/LoginPage/LoginPage";
import OfficeMain from "./Component/HomesOffice/OfficeMain"
import AddOffice from "./Component/HomesOffice/AddOffice";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Mainpage  setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/search/:searchTerm" element={<SearchResultPage  setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/MapPage" exact element={<MapPage  setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/ChungyakPage" exact element={<ChungyakPage  setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/SatisfactionPage/:searchTerm" exact element={<SatisfactionPage setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>}  />
          <Route path="/EstatePage" exact element={<EstatePage setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn} />} />
          <Route path="/SignUpPage" exact element={<SignUpPage setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/LoginPage" element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/CommunityPage" exact element={<OfficeMain  setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/CommunityPage/addOffice" exact element={<AddOffice setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
