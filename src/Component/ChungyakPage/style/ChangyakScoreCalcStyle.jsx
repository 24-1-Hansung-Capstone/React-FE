const div = {
    fontSize: "20px",
    fontFamily: "NanumGothic",
    fontWeight: "bold",
    marginBottom: "3px",
}

const style = {
    ChungyakScoreCalc: {
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr",
    },

    div1 : {
        ...div,
        gridRow: "1 / 2",
        gridColumn: "1 / 2",
    },
    div2 : {
        ...div,
        gridRow: "2 / 3",
        gridColumn: "1 / 2",
    },
    div3 : {
        ...div,
        gridRow: "3 / 4",
        gridColumn: "1 / 2",
    },
    input : {
        width: "60px", 
        height: "50px", 
        fontSize: "30px", 
        fontFamily: "NanumGothic", 
        fontWeight: "bold", 
        border: "none",
        textAlign:"center",
        border: "1px solid #d9d9d9", // 테두리 추가
        borderRadius: "20px" // 둥근 테두리 설정
    },
    result : {
        gridRow: "1 / 4",
        gridColumn: "3 / 4",
        backgroundColor: "#BFDEE0",    
        display: "flex",
        justifyContent: "center", // 텍스트를 수평 가운데 정렬
        alignItems: "center", // 텍스트를 수직 가운데 정렬
        textAlign: "center", // 텍스트를 수평 가운데 정렬
        fontWeight: "bold",
        fontSize: "25px",
        borderRadius: "20px" // 둥근 테두리 설정
    },
    score : {
        fontSize: "35px",
    }
}

export default style