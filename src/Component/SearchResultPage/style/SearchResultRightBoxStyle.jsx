import { lineHeight } from "@mui/system";

const style = {
    rightBox: {
        margin: "20px 20px",
        marginTop : "5%",
        width: "50%",
        minWidth: "300px",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        top: "1px",
        left: "1px",
        position: "sticky",
        fontSize : "21px",
        lineHeight : "1.6",
        backgroundColor: "#f9f9f9", // 부드러운 배경색 추가
        borderRadius: "8px", // 모서리를 둥글게
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    searchTerm: {
        fontSize:"30px",
        fontWeight: "bold", // 폰트를 bold로 설정
        color: "#007bff" // 파랑색 계열로 설정
    }
};

export default style;