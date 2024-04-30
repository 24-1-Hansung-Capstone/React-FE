import React from "react";
import "./style/OfficeListItem.css"; // 스타일 시트 파일을 임포트합니다.

const OfficeListItem = ({ post: { id, type, name, addr }, setSelectPostId }) => {
    return (
        <>
            <div className="officeListItemContainer">
                <button className="officeListButton">{type}</button>
                <div className="officeListItemDetails">
                    <div onClick={() => setSelectPostId(id)}>{name}</div>
                    <div>{addr}</div>
                </div>
            </div>
            <br/>
        </>
    )
}

export default OfficeListItem
