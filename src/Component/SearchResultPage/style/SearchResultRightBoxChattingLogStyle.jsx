const style = {
    logo: {
        width: "20px",
        height: "20px"
    },
    summary: {
        fontSize: "20px",
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
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        maxHeight: "700px",
        overflow: "auto" // 스크롤이 필요할 때만 스크롤 표시
    }
    
};

export default style;