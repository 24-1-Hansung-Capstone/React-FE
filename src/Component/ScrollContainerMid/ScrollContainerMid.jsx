// src/Components/ScrollContainerMid/ScrollContainerMid.jsx
import React from "react";
import ScrollContainer from "../ScrollContainer/ScrollContainer";
import ShareStyles from "../ShareStyles/ShareStyles";

function ScrollContainerMid(props){
    return (
        <div style={ShareStyles.ScrollContainerMid}>
            <ScrollContainer></ScrollContainer>
        </div>
    )
}

export default ScrollContainerMid;