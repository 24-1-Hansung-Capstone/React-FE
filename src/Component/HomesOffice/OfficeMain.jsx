// src/Components/CommunityPage/CommunityPage.jsx
import React, { useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";

import OfficeLeftContainer from "./OfficeLeftContainer";
import OfficeRightContainer from "./OfficeRightContainer";

function CommunityPage() {

    const [selectPost, setSelectPost] = useState()

    return (
        <div>
            <MenuBar />
            <div>
                <Logo />
                <SmallSearchBar />
                <div id="officeMainContainer" >
                    <OfficeLeftContainer
                        onSelectPost={setSelectPost} />
                    {/* <OfficeRightContainer 
                        selectPost={selectPost} /> */}
                </div>
            </div>
        </div>
    );
}

export default CommunityPage;