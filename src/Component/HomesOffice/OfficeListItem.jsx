import React from "react";
import "./style/OfficeListItem.css"; // 스타일 시트 파일을 임포트합니다.

const OfficeListItem = ({ post: { id, type, name, addr, writer, content }, setSelectPost}) => {
    const handleClick = () => {
        console.log(type);
        setSelectPost({ id, type, name, addr, writer, content })
    };

    if(type === 1) {
        type = "전세";
    } else if (type === 2) {
        type = "월세";
    } else if (type === 3) {
        type = "매매"; 
    } else if (type === 4) {
        type = "협의";
    }

    return (
        <>
            <div className="officeListItemContainer">
                <button className="officeListButton" onClick={handleClick}>{type}</button>
                <div className="officeListItemDetails">
                    <div>{name}</div>
                    <div>{addr}</div>
                </div>
                <button className="officeDetailButton" onClick={() => setSelectPost({ id, type, name, addr, writer, content })}>상세 보기</button>
                <button className="officeDeleteButton">🗑️</button>
            </div>
            
            <br/>
        </>
    )
}

export default OfficeListItem;
