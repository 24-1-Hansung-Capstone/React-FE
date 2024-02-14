import "./FrameContainer.css";
import logo from "../assets/logo.png"
import map from "../assets/map.png"
import searchIcon from "../assets/search_button.png"



const FrameContainer = () => {
  return (
    <div className="frame-container">
      <div className="wrapper-map">
        <img className="map-icon" alt="" src={map} />
      </div>
      <img className="logo-icon" loading="eager" alt="" src={logo} />
      <div className="search">
        <div className="input">
          <input
            className="left"
            placeholder="홈즈 검색 또는 지도에서 클릭"
            type="text"
          />
          <div className="right">
            <div className="value">Value</div>
            <img className="right-icon" alt="" src="/right-icon.svg" />
          </div>
        </div>
        <img className="search-icon" alt="" src={searchIcon} />
      </div>
    </div>
  );
};

export default FrameContainer;