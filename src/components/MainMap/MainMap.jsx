import React, { useEffect } from "react";
const { kakao } = window;


const MainMap = () => {
  useEffect(()=>{
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33, 126),
      level:3
    };
    const map = new kakao.maps.Map(container, options)
  })

  return (
    <div id = "map" style={{position: "absolute", left: "0px", top: "0px", width: "100%", height: "100%"}}>
    </div>
  )

}

export default MainMap;