import React from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../Menubar/Menubar";
import SearchInput from "../SearchInput/SearchInput";
import logo from '../../Asset/Logo.png';

function SearchResultPage() {
    // URL 파라미터에서 검색어 추출
    const { searchTerm } = useParams();
    
    return (
        <div>
            {/* 메뉴 바와 로고, 검색창 추가 */}
            <MenuBar />
            <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginLeft: "20px" }}>
                {/* 로고를 MenuBar 아래 맨 왼쪽에 작게 배치 */}
                <img src={logo} alt="Logo" style={{ width: "200px", height: "100px" }} />
                {/* 검색창을 로고 옆에 배치 */}
                <SearchInput style={{ marginLeft: "20px" }} />
            </div>

            <div style={{ display: "flex", justifyContent: "left", marginTop: "20px" }}>
                {/* 추가된 하늘색 버튼 */}
                <div style={styles.button}>1</div>
                <div style={styles.button}>2</div>
                <div style={styles.button}>3</div>
                <div style={styles.button}>4</div>
            </div>
        </div>
    );
}

// 버튼 스타일 정의
const styles = {
    button: {
        backgroundColor: "#61dafb",
        borderRadius: "40px",
        padding: "10px 20px",
        margin: "0 10px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

export default SearchResultPage;
