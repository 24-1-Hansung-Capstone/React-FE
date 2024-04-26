import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Dynamically add Kakao Maps SDK script to the document
const kakaoScript = document.createElement('script');
kakaoScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=850a9218cb545efb10a9bbc88723f254&libraries=services,clusterer&autoload=false';
kakaoScript.async = true;
document.body.appendChild(kakaoScript);

reportWebVitals();
