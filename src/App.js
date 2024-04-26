// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Component/Mainpage/Mainpage';
import SearchResultPage from './Component/SearchResultPage/SearchResultPage';
import MapPage from './Component/MapPage/MapPage';
import ChungyakPage from './Component/ChungyakPage/ChungyakPage';
import SatisfactionPage from './Component/SatisfactionPage/SatisfactionPage';
import EstatePage from './Component/EstatePage/EstatePage';
import SignUpPage from "./Component/SignUpPage/SignUpPage";
import LoginPage from "./Component/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/search/:searchTerm" element={<SearchResultPage />} />
          <Route path="/MapPage" exact element={<MapPage />} />
          <Route path="/ChungyakPage" exact element={<ChungyakPage />} />
          <Route path="/SatisfactionPage/:searchTerm" exact element={<SatisfactionPage />} />
          <Route path="/EstatePage" exact element={<EstatePage />} />
          <Route path="/SignUpPage" exact element={<SignUpPage />} />
          <Route path="/LoginPage" exact element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
