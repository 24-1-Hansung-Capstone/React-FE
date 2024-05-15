//srr\Component\MapPage\MapPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import MenuBar from "../ShareFolder/Menubar";
import { MapContainer, InputForm, ResultList, Pagination, SearchButton, Wrapper, CurrentPosButton } from "./style"; // CurrentPosButton import 추가
import searchIcon from "../../Asset/searchIcon.svg"; // 이미지 불러오기
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { kakao } = window;

const MapPage = () => {
  const [Places, setPlaces] = useState([]);
  const [renderedMap, setRenderedMap] = useState(null);
  const  [markersArr, setMarkersArr] = useState([])
  let infoWindow

  
	const location = useLocation();

  const myMap = useRef(null);
  const myPagination = useRef(null);
  const myInput = useRef(null);
  const [InputText, setInputText] = useState((location.state == null) ? "" : location.state.search);

  
  if(location.state != null){
    kakao.maps.load(() => {
      const ps = new kakao.maps.services.Places();
      infoWindow = (new kakao.maps.InfoWindow({ zIndex: 1 }));
      infoWindow.setMap(null)
      infoWindow = (new kakao.maps.InfoWindow({ zIndex: 1 }));
      ps.keywordSearch(InputText, placesSearchCB, { size: 5 });
  
      function placesSearchCB(data, status, pagination) {
        for(let i = 0; i < markersArr.length; i++){
          markersArr[i].setMap(null)
        }
        infoWindow.setMap(null)
        markersArr.length = 0;
        
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
          for(let i = 0; i < markersArr.length; i++){
            markersArr[i].setMap(null)
          }
          infoWindow.setMap(null)
          markersArr.length = 0;
          for (let i = 0; i < data.length; i++) {
            addMarker(data[i], markersArr);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          for(let i = 0; i < markersArr.length; i++){
            markersArr[i].setMap(renderedMap)
          }
  
          if(renderedMap !== null) renderedMap.setBounds(bounds);
          displayPagination(pagination);
          setPlaces(data);
        }
        else{
          for(let i = 0; i < markersArr.length; i++){
            markersArr[i].setMap(null)
          }
          infoWindow.setMap(null)
          markersArr.length = 0;
        }
      }
  
      function displayPagination(pagination) {
        var paginationEl = myPagination.current,
          fragment = document.createDocumentFragment(),
          i;
        if(paginationEl == null) return;
        while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild(paginationEl.lastChild);
        }
  
        for (i = 1; i <= pagination.last; i++) {
          var el = document.createElement('a');
          el.href = '#';
          el.innerHTML = i;
  
          if (i === pagination.current) {
            el.className = 'on';
          } else {
            el.onclick = (function (i) {
              return function () {
                
                pagination.gotoPage(i);
              };
            })(i);
          }
  
          fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
      }
  
      function addMarker(place, markersArr) {
        let marker = new kakao.maps.Marker({ // marker 변수 선언
          map: null,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
  
        kakao.maps.event.addListener(marker, 'click', () => {
          infoWindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infoWindow.open(renderedMap, marker);
  
        });
        markersArr.push(marker);
      }
    })

    if(myInput.current != null){
      myInput.current.style.visibility = "hidden"
    }

  }

  useEffect(() => {
    kakao.maps.load(() => {
      const container = myMap.current
      const options = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 10,
      };
      if (renderedMap === null) {
        const maap = new kakao.maps.Map(container, options)
        setRenderedMap(maap);
      }
      else {
        return;
      }
    })
    
  }, [])

  useEffect(() => {
    if (renderedMap === null) {
      return;
    }
    const ps = new kakao.maps.services.Places();
    infoWindow = (new kakao.maps.InfoWindow({ zIndex: 1 }));
    infoWindow.setMap(null)
    infoWindow = (new kakao.maps.InfoWindow({ zIndex: 1 }));
    ps.keywordSearch(InputText, placesSearchCB, { size: 5 });

    function placesSearchCB(data, status, pagination) {
      for(let i = 0; i < markersArr.length; i++){
        markersArr[i].setMap(null)
      }
      infoWindow.setMap(null)
      markersArr.length = 0;
      
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        for(let i = 0; i < markersArr.length; i++){
          markersArr[i].setMap(null)
        }
        infoWindow.setMap(null)
        markersArr.length = 0;
        for (let i = 0; i < data.length; i++) {
          addMarker(data[i], markersArr);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        for(let i = 0; i < markersArr.length; i++){
          markersArr[i].setMap(renderedMap)
        }

        if(renderedMap !== null) renderedMap.setBounds(bounds);
        displayPagination(pagination);
        setPlaces(data);
      }
      else{
        for(let i = 0; i < markersArr.length; i++){
          markersArr[i].setMap(null)
        }
        infoWindow.setMap(null)
        markersArr.length = 0;
      }
    }

    function displayPagination(pagination) {
      var paginationEl = myPagination.current,
        fragment = document.createDocumentFragment(),
        i;

      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function addMarker(place, markersArr) {
      let marker = new kakao.maps.Marker({ // marker 변수 선언
        map: null,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infoWindow.open(renderedMap, marker);

      });
      markersArr.push(marker);
    }
  }, [InputText]);

  const onHandleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      setInputText(event.target.value);
    }
  };

  const getCurrentPosBtn = () => { // getCurrentPosBtn 함수 정의
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
    const marker = new kakao.maps.Marker({
      map: renderedMap,
      position: new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
    });
    marker.setMap(renderedMap);
  };

  return (
    <Wrapper>
      <MenuBar />
      <div style={{ display: 'flex', position: 'relative' }}>
        <div style={{ flex: 1 }}>
          <div ref = {myInput}>
          <InputForm onSubmit={(e) => e.preventDefault()}>
            <input placeholder="검색어를 입력하세요" onKeyDown={onHandleOnKeyDown}/>
            <SearchButton type="button" onClick={onHandleOnKeyDown}>
              <img src={searchIcon} alt="Search" /> {/* 이미지 아이콘 추가 */}
            </SearchButton>
          </InputForm>
          </div>
          <ResultList style={{ display: InputText ? 'block' : 'none' }}>
            {Places.map((item, i) => (
              <Link to={"/search/" + item.place_name} style={{ textDecoration: 'none', color: 'inherit' }} >
                <div key={i}>
                  <span>{i + 1}</span>
                  <div>
                    <h5 style = {{color: "blue"}}>{item.place_name}</h5>
                    {item.road_address_name ? (
                      <div>
                        <span>{item.road_address_name}</span>
                        <span>{item.address_name}</span>
                      </div>
                    ) : (
                      <span>{item.address_name}</span>
                    )}
                    <span>{item.phone}</span>
                  </div>
                </div>
              </Link>
            ))}
            <Pagination ref={myPagination}></Pagination>
          </ResultList>
          {/* <CurrentPosButton onClick={getCurrentPosBtn}>현재 위치</CurrentPosButton> */}
        </div>
        <MapContainer ref={myMap}></MapContainer>
      </div>
    </Wrapper>
  );
}

export default MapPage;