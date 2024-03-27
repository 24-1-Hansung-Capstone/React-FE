import React from "react";
import searchIcon from "../../Asset/searchIcon.svg";

function SearchInput(props) {
    const handleClick = () => {
        console.log("이미지 클릭됨!");
    };

    return (
        <div style={{
            border: "5px solid #92baff",
            borderRadius: "20px",
            width: "530px",
            height: "40px",
            display: 'flex',
            alignItems: 'center',
        }}>
            <input 
                placeholder="Homes! 검색"  
                style={{ 
                    backgroundColor: 'transparent',
                    border: "none",
                    outline: "none",
                    width: "530px",
                    height: "40px",
                    fontSize: "18px",
                    fontFamily: "Roboto",
                    paddingLeft: "20px",
                }}
            />
            <img src={searchIcon} alt="아이콘" style={{
                width: '30px', 
                height: '30px',
                paddingRight:"10px",
            }} onClick={handleClick} />
        </div>
    );
}

export default SearchInput;
