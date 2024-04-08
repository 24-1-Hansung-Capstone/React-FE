import React, { useEffect } from 'react';
import MenuBar from "../Menubar/Menubar";
import SmallLogoMid from "../SmallLogoMid/SmallLogoMid";
import ShareStyles from '../../Asset/ShareStyles/ShareStyles';
import ChungyakSearchInput from "../ChungyakSearchInput/ChungyakSearchInput"

function ChungyakPage() {

  return (
    <div>
      <div>
        <MenuBar></MenuBar> 
      </div>
      <div style={ShareStyles.LeftPageStyle}>
        <div style={ShareStyles.LeftPageDetailStyle}>
          <SmallLogoMid/>
          <ChungyakSearchInput></ChungyakSearchInput>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '50%' }}>
            <h2>ㅎㅇ</h2>
          </div>
          <div style={{ width: '50%' }}>
            <h2>ㅂㅇ</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChungyakPage;
