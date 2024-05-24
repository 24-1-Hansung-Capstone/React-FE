//srr\Component\MapPage\SatisfactionPage.js
import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  width: 100vh;
  margin-top : 5vh;
  margin-left : -40vh;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 70vh;
  height: 70vh;
  margin-top: 1vh;
  border-radius: 20px;
`;

export const InputForm = styled.form`
  margin-top: 5vh;
  margin-left: 6vh;
  width: 25vh;
  border-radius: 40px;
  display: inline-flex;
  border: 2px solid #BFDEE0;
  position: absolute;
  z-index: 2;
  background-color: white;

  input {
    border: none;
    outline: none;
    margin-left: 4vh;
    background-color: white;
    flex: 1;
  }
`;

export const ResultList = styled.div`
  position: absolute;
  top: 6vh;
  height : 50vh;
  width : 25vh;
  left: 0;
  margin-left: 4vh;
  background-color: rgba(255, 255, 255);
  padding: 3vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  font-size: 13px;
  overflow-y: auto;
  border-radius: 10px;

  div {
    margin-top: 2vh;
    padding: 5px;
    background-color: #f5f5f5; /* Added background color for inner divs */
    border-radius: 5px; /* Added border radius for inner divs */
  }

  h5 {
    font-size: 18px; /* Increased font size */
    margin-bottom: 2px; /* Added margin bottom */
    color: #333; /* Changed text color */
  }

  span {
    display: block; /* Changed display to block */
    margin-bottom: 2px; /* Added margin bottom */
    color: #666; /* Changed text color */
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;

  a {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
    }

    &.on {
      background-color: #BFDEE0;
      color: #fff;
      cursor: default;
    }
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 5%;
  margin: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

export const CurrentPosButton = styled.button`
  position: absolute;
  bottom: 20px; /* 조정 가능한 버튼 위치 */
  right: 20px; /* 조정 가능한 버튼 위치 */
  background-color: #BFDEE0;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 7px 7px;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
`;
