import React, { useEffect } from 'react';
import MenuBar from "../Menubar/Menubar";
import ScrollContainerMid from "../ScrollContainerMid/ScrollContainerMid";
import Logo from "../Logo/Logo";

let map; // Move map variable outside of component

function ChungyakPage() {

  return (
    <div>
      <div>
        <MenuBar></MenuBar> 
      </div>
      <div
        style={{
          display: 'flex', // Use flexbox layout
          width: '100%',
          height: '100vh',
          position: 'relative', // Add relative position to allow absolute positioning within this div
        }}
      >
        <div
          style={{
            flex: '1', // Take up 20% of the space
            position: 'absolute', // Absolute position this div
            height: '100%', // Set height to full height of parent div
            backgroundColor: 'rgba(255, 255, 255, 1)', // Set to semi-transparent red for visibility
            zIndex: 100, // Make sure the box is on top of the map
          }}
        >
          <Logo/>
        </div>
        <div>
          <section style={{width: '50%', display: 'inline-block'}}>
            <h2 style={{borderTop: '1px solid gray'}}>내 점수 알아보기</h2>
            <p>내 무주택 기간은 <span style={{backgroundColor: 'lightgray'}}>       </span>년</p>
            <p>내 부양가족 수는 <span style={{backgroundColor: 'lightgray'}}>       </span>명</p>
            <p>내 입주자 저축 기간은 <span style={{backgroundColor: 'lightgray'}}>       </span>년</p>
          </section>
          <section style={{width: '50%', display: 'inline-block'}}>
            <div style={{backgroundColor: 'blue', borderRadius: '40px', padding: '10px'}}>
              <p style={{margin: 0, color: 'white', textAlign: 'center'}}>100점</p>
            </div>
          </section>
          <section style={{clear: 'both'}}>
            <div style={{backgroundColor: 'lightgray', padding: '10px'}}>
              <p>유형 <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/></p>
              <p>지역 <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/></p>
              <p>상태 <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/></p>
              <br/>
              <p>유형 <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/></p>
              <p>기간 <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/> ~ <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/></p>
              <br/>
              <p>제목 <input type="text" style={{border: 'none', backgroundColor: 'transparent'}}/></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ChungyakPage;
