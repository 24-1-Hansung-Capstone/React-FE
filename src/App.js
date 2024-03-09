import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import SearchResultPage from "./components/SearchResultPage/SearchResultPage"

function App(props){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<MainPage/>}/>
                <Route path="search-result/:searchWord" element = {<SearchResultPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;