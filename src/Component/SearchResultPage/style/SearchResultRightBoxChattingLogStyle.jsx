const style = {
    logo: {
        width: "20px",
        height: "20px"
    },
    summary: {
        fontSize: "25px",
        justifyContent: "flex-start",
        textAlign: "left",
    },
    userQuestion: {
        justifyContent: "flex-end",
        textAlign: "right",
    },
    botResponse: {
        justifyContent: "flex-start",
        textAlign: "left",
    },
    chattingLogs : {
        fontSize: "17px",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        maxHeight: "700px",
        overflow: "auto", // 스크롤이 필요할 때만 스크롤 표시
        lineHeight: "2", // 폰트의 위아래 간격
        letterSpacing: "0.03em", // 자간
        padding: "10px", // 내부 여백
    }
    
};

export default style;