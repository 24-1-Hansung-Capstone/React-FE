import React from "react";
import "./style/OfficeListItem.css"; // 스타일 시트 파일을 임포트합니다.

const OfficeListItem = ({ post: { id, type, name, addr }, setSelectPostId }) => {
    if(type == 1) {
        type = "전세";
    } else if (type == 2) {
        type = "월세";
    } else if (type == 3) {
        type = "매매"; 
    } else if (type == 4) {
        type = "협의";
    }

    return (
        <>
            <div className="officeListItemContainer">
                <button className="officeListButton">{type}</button>
                <div className="officeListItemDetails">
                    <div>{name}</div>
                    <div>{addr}</div>
                </div>
                <button className="officeDetailButton" onClick={() => setSelectPostId(id)}>상세 보기</button>
            </div>
            
            <br/>
        </>
    )
}

export default OfficeListItem
