// src\Component\MapPage\MapPage.jsx
import React, { useEffect } from 'react';
import MenuBar from "../ShareFolder/Menubar";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
import MapPageLeftBox from './MapPageLeftBox';
import MapPageRightBox from './MapPageRightBox';

let map; // Move map variable outside of component

const MapPage = ({searchWord}) => {
  useEffect(() => {
    const loadKakaoMapScript = async () => {
      try {
        await loadScript('https://dapi.kakao.com/v2/maps/sdk.js?appkey=850a9218cb545efb10a9bbc88723f254&libraries=services,clusterer&autoload=false');
        window.kakao.maps.load(() => {
          const MapContainer = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 3,
            scrollwheel: true,
          };
          // Only create a new map if it doesn't already exist
          if (!map) {
            map = new window.kakao.maps.Map(MapContainer, options);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    
    loadKakaoMapScript();
  }, []);

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve();
      script.onerror = () => reject('Failed to load script');
      document.head.append(script);
    });
  }

  return (
    <div>
      <div>
      <MenuBar/>
      </div>
      <div style={{...PageStyles.CommonPageDivide, ...ComponentStyles.CommonPageDivide}}>
      <MapPageLeftBox/>
      <MapPageRightBox/>
    </div>
    </div>
  );
};

export default MapPage;