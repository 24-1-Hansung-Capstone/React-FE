import React, { useEffect } from 'react';
import MenuBar from "../Menubar/Menubar";
import ScrollContainerMid from "../ScrollContainerMid/ScrollContainerMid";
import Logo from "../Logo/Logo";

let map; // Move map variable outside of component

const MapPage = ({searchWord}) => {
  useEffect(() => {
    const loadKakaoMapScript = async () => {
      try {
        await loadScript('https://dapi.kakao.com/v2/maps/sdk.js?appkey=850a9218cb545efb10a9bbc88723f254&autoload=false');
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 3,
            scrollwheel: true,
          };
          // Only create a new map if it doesn't already exist
          if (!map) {
            map = new window.kakao.maps.Map(container, options);
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
        <MenuBar></MenuBar> 
      </div>
      <div
        style={{
          display: 'flex', // Use flexbox layout
          width: '100%',
          height: '100vh',
          position: 'relative', // Add relative position to allow absolute positioning within this div
        }}
      >
        <div
          style={{
            flex: '1', // Take up 20% of the space
            position: 'absolute', // Absolute position this div
            height: '100%', // Set height to full height of parent div
            backgroundColor: 'rgba(255, 255, 255, 1)', // Set to semi-transparent red for visibility
            zIndex: 100, // Make sure the box is on top of the map
          }}
        >
          <Logo/>
        </div>
        <div
          id="map"
          style={{
            flex: '1', // Take up 80% of the space
            position: 'relative', // Add relative position to allow absolute positioning within this div
          }}
        >
          {/* Map container */}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
