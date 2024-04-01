// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Component/Mainpage/Mainpage';
import SearchResultPage from './Component/SearchResultPage/SearchResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/search/:searchTerm" element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
