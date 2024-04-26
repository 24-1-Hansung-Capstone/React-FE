// src/Component/MapPage/MapPage.jsx
import React, { useEffect, useState } from 'react';
import MenuBar from "../ShareFolder/Menubar";
import { MapContainer, InputForm, ResultList, Pagination, SearchButton, Wrapper } from "./style";
import searchIcon from "../../Asset/searchIcon.svg"; // 이미지 불러오기

const { kakao } = window;

const MapPage = () => {
  const [InputText, setInputText] = useState('');
  const [Places, setPlaces] = useState([]);
  
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById('myMap');
      const options = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      const ps = new kakao.maps.services.Places();
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      ps.keywordSearch(InputText, placesSearchCB);

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
          displayPagination(pagination);
          setPlaces(data);
        }
      }

      function displayPagination(pagination) {
        var paginationEl = document.getElementById('pagination'),
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

      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
      }
    });
  }, [InputText]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSearchClick = () => {
    // 검색 버튼 클릭 시 실행할 함수
    // 여기에 기존의 검색 기능 구현
  };

  return (
    <Wrapper>
      <MenuBar/>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <InputForm onSubmit={(e) => e.preventDefault()}>
            <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
            <SearchButton type="button" onClick={onSearchClick}>
              <img src={searchIcon} alt="Search" /> {/* 이미지 아이콘 추가 */}
            </SearchButton>
          </InputForm>
          <ResultList style={{ display: InputText ? 'block' : 'none' }}>
            {Places.map((item, i) => (
              <div key={i}>
                <span>{i + 1}</span>
                <div>
                  <h5>{item.place_name}</h5>
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
            ))}
            <Pagination id="pagination"></Pagination>
          </ResultList>
        </div>
        <MapContainer id="myMap"></MapContainer>
      </div>
    </Wrapper>
  );
}

export default MapPage;
