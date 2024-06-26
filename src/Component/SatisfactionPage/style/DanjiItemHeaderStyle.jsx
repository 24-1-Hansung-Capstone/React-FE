const style = {
    header: { 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "2vh",
        width : "80vh",
    },
    danjiName : {
        fontWeight: "bold", // 폰트를 bold로 설정
        fontSize: "28px" // 원하는 크기로 조정
    },
    arrow : {
        width :"2vh"
    },

    myMap : {
        //searchResultRightBox과 맞춰야함
        top: "1px",
        left: "1px",
        display:"flex",
        position: "sticky",
        justifyContent: "center",
        alignItems: "flex-start",
    }
};

export default style;