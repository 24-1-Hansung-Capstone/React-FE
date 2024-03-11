import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

const { kakao } = window;

const MainMap = () => {
  const [info, setInfo] = useState();
  const [marker, setMarker] = useState([]);
  const [map, setMap] = useState();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.566498652285, 126.99209745028),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, options));
      setMarker(new window.kakao.maps.Marker());
    });
  }, []);

  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      () => alert("위치 정보를 가져오는데 실패했습니다."),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  }

  const getPosSuccess = (pos) => {
    var currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude,
      pos.coords.longitude
    );

    map.panTo(currentPos);

    marker.setMap(null);
    marker.setPosition(currentPos);
    marker.setMap(map);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      <button className="current-location-btn" onClick={getCurrentPosBtn} style={{ position:"absolute", right: "5px", bottom: "5px"}}>현재 위치</button>
    </div>
  );
}

export default MainMap;
