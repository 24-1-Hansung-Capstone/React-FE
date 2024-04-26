import React, { useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";

import OfficeLeftContainer from "./OfficeLeftContainer";
import OfficeRightContainer from "./OfficeRightContainer";
import './style/OfficeMain.css'
const OfficeMain = () => {

    // TODO: 추후, 해당 부분을 useEffect로 처리해야한다.
    const data = [
        {
            id : 1,
            type : "전세",
            name : "대충아파트이름1",
            addr : "대충아파트주소1",
            desc : "대충아파트1 대충아파트1 대충아파트1 대충아파트1",
            img  : "사진1-1"
        },
        {
            id : 2,
            type : "월세",
            name : "대충아파트이름2",
            addr : "대충아파트주소2",
            desc : "대충아파트2 대충아파트2 대충아파트2 대충아파트2",
            img  : "사진2-1"
        },
        {
            id : 3,
            type : "매매",
            name : "대충아파트이름3",
            addr : "대충아파트주소3",
            desc : "대충아파트3 대충아파트3 대충아파트3 대충아파트3",
            img  : "사진3-1"
        },
        {
            id : 4,
            type : "협의",
            name : "대충아파트이름4",
            addr : "대충아파트주소4",
            desc : "대충아파트4 대충아파트4 대충아파트4 대충아파트4",
            img  : "사진4-1"
        },
    ]

    const [selectPostId, setSelectPostId] = useState(null)

    return (
        <div>
            <MenuBar />
            <div>
                <Logo />
                <SmallSearchBar />
                <div className="OfficeMainContainer" >
                    <OfficeLeftContainer
                        className="OfficeLeftContainer"
                        data={data}
                        setSelectPostId={setSelectPostId} />
                    <OfficeRightContainer 
                        className="OfficeRightContainer"
                        data={data}
                        selectPostId={selectPostId} />
                </div>
            </div>
        </div>
    );
}

export default OfficeMain;