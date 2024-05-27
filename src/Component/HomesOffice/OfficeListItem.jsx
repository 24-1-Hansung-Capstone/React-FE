import React, { useEffect, useState } from "react";
import "./style/OfficeListItem.css"; // 스타일 시트 파일을 임포트합니다.
import officeDeleteButton from "../../Asset/realtyDelete.svg";

const OfficeListItem = ({ post: { id, type, name, addr, writer, content }, setSelectPost, onDeletePost}) => {

    const [userData, setUserData] = useState(null); // 현재 사용자 정보 추가

    useEffect(() => {
        const storedUserData = sessionStorage.getItem("userData");
        if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
    }
    });

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
                {/* 작성자와 현재 사용자가 같은 경우에만 삭제 버튼 표시 */}
                {userData && userData.email === writer && (
                <img
                src={officeDeleteButton}
                alt="Delete Icon"
                className="officeDeleteButton"
                onClick={() => onDeletePost(id)}
                />
                )}
            </div>
            
            <br/>
        </>
    )
}

export default OfficeListItem;
