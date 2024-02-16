import React, { useEffect } from "react";
const { kakao } = window;


const BasicMap = () => {
  useEffect(()=>{
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33, 126),
      level:3
    };
    const map = new kakao.maps.Map(container, options)
  })

  return (
    <div id = "map" style={{width :'500px', height : '400px'}}>
      
    </div>
  )

}

export default BasicMap;