// src/components/MainMap/MainMap.jsx
import React, { useEffect, useState } from 'react';
const { kakao } = window;

const MainMap = () => {
  const [marker, setMarker] = useState([]);
  const [map, setMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);


  useEffect(() => {
    //지도 로드
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.566498652285, 126.99209745028),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, options));
      setMarker(new window.kakao.maps.Marker());
      setGeocoder(new kakao.maps.services.Geocoder());
    });
  }, []);


  // window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
  //   searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
  //       detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';


  //       console.log(result[0].address.address_name)
  //       // 마커를 클릭한 위치에 표시합니다 
  //       marker.setPosition(mouseEvent.latLng);
  //       marker.setMap(map);
  //     }
  //   });
  // });

  //현재위치 버튼
  const getCurrentPosBtn = () => {
    //현재 위치 버튼 함수
    const getPosSuccess = (pos) => {
      //현재 위치를 가져옴
      var currentPos = new window.kakao.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      );

      //현재 위치로 지도 조정
      map.panTo(currentPos);

      //마커 생성
      marker.setMap(null);
      marker.setPosition(currentPos);
      marker.setMap(map);
    };

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



  function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      <button className="current-location-btn" onClick={getCurrentPosBtn} style={{ position: "absolute", right: "5px", bottom: "5px" }}>현재 위치</button>
    </div>
  );
}

export default MainMap;