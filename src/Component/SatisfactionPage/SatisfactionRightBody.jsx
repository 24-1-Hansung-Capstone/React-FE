//srr\Component\SatisfactionPage\SatisfactionRightBody.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, InputForm, ResultList, Pagination, SearchButton, Wrapper, CurrentPosButton } from "./style"; // CurrentPosButton import 추가
import searchIcon from "../../Asset/searchIcon.svg"; // 이미지 불러오기

const { kakao } = window;

const SatisfactionRightBody = () => {
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
      let marker; // marker 정의

      ps.keywordSearch(InputText, placesSearchCB, { size: 5 });

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
        marker = new kakao.maps.Marker({ // marker 변수 선언
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
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
    });
  };

  const onSearchClick = () => {
    // 검색 버튼 클릭 시 실행할 함수
    // 여기에 기존의 검색 기능 구현
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', position: 'relative' }}>
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
          <CurrentPosButton onClick={getCurrentPosBtn}>현재 위치</CurrentPosButton> {/* 수정된 버튼 */}
        </div>
        <MapContainer id="myMap"></MapContainer>
      </div>
    </Wrapper>
  );
}

export default SatisfactionRightBody;