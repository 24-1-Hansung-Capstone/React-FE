// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Component/Mainpage/Mainpage';
import SearchResultPage from './Component/SearchResultPage/SearchResultPage';
import MapPage from './Component/MapPage/MapPage';
import SubscriptionPage from './Component/SubscriptionPage/SubscriptionPage';
import NewsPage from './Component/NewsPage/NewsPage';
import SatisfactionPage from './Component/SatisfactionPage/SatisfactionPage';
import EstatePage from './Component/EstatePage/EstatePage';
import CommunityPage from './Component/CommunityPage/CommunityPage';
import LoginPage from './Component/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/search/:searchTerm" element={<SearchResultPage />} />
          <Route path="/MapPage" exact element={<MapPage />} />
          <Route path="/SubscriptionPage" exact element={<SubscriptionPage />} />
          <Route path="/NewsPage" exact element={<NewsPage />} />
          <Route path="/SatisfactionPage" exact element={<SatisfactionPage />} />
          <Route path="/EstatePage" exact element={<EstatePage />} />
          <Route path="/CommunityPage" exact element={<CommunityPage />} />
          <Route path="/LoginPage" exact element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
