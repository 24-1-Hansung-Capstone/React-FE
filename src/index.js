import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar/SearchBar';
import Test from './test/Test'
import MainMap from './components/MainMap/MainMap'
import reportWebVitals from './reportWebVitals';
import MainPage from './components/MainPage/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
