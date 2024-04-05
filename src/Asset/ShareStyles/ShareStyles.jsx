// src/Components/ShareStyles/ShareStyles.jsx
const ShareStyles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    searchBarContainer: {
        border: "5px solid #92baff",
        borderRadius: "30px",
        width: "830px",
        height: "60px",
        display: 'flex',
        alignItems: 'center',
    },
        SearchRecommend: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#92baff",
        borderRadius: "40px",
        padding: "8px 20px",
        margin: "0 10px",
        fontSize: "15px",
        fontWeight: "bold",
        cursor: "pointer",
    },
    ScrollContainerMid: {
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        width: "200px",
        height: "100px",
    },
    ToggleCategory: {
        marginRight: "15px",
        borderBottom: "1px solid gray",
        marginBottom: "50px",
    },
    RightBox: {
        paddingBottom: "10px",
        width: "90%", 
        padding: "10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        marginTop: "20px",
        marginLeft: "70px",
        marginRight: "30px",
        marginBottom: "20px",
    },
    LeftBox: {
        width: "120%",
        padding: "20px",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "10px",
        marginBottom: "10px",
        flexBasis: "100%",
        fontSize: "35px",
    },
    Nav: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: "left", 
        marginBottom: "10px", 
        paddingBottom: "10px",
    },
    hrStyle: {
        border: "1px solid black",
        width: "100%",
    },
    arrowIcon: {
        width: "20px",
        height: "20px",
        marginLeft: "5px",
    },
    section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexBasis: "80%",
    },
    textarea1: {
        width: "0%", // 필요에 따라 너비 조정
        minHeight: "100px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        resize: "vertical", // 사용자가 수직으로만 크기를 조정할 수 있게 함
        boxSizing: "border-box",
        border: "none", // 테두리 없음
        whiteSpace: "pre-wrap", // 자동 줄바꿈 활성화
        wrap: "soft", // 가로 스크롤 없음
        overflowY: 'scroll', 
        maxHeight: '400px', 
        minHeight: '400px'
    },
    textarea2: {
        width: "90%", // 필요에 따라 너비 조정
        minHeight: "200px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        resize: "vertical", // 사용자가 수직으로만 크기를 조정할 수 있게 함
        boxSizing: "border-box",
        backgroundColor: "#DCDCDC", // 배경색을 회색으로 설정
        border: "none", // 테두리 없음
    },
    searchResult: {
        textAlign: "left", 
        color: "blue", 
        fontSize: "40px"
    },
    chatarea1: {
        textAlign: "right", 
        flex: "1",
        marginRight: "100px", 
        padding: "10px", 
        fontSize: "25px"
    },
    chatarea2: {
        textAlign: "left", 
        flex: "1",
        marginRight: "100px", 
        padding: "10px", 
        fontSize: "25px"
    },
    input: {
        width: "100%",
        height: "200px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    buttonArea: {
        flex: "1",
        padding: "10px",
        width: "80%",
    },
    button: {
        width: "100%",
        height: "50px",
        backgroundColor: "#92baff",
        border: "none",
        borderRadius: "40px",
        cursor: "pointer",
    },
    

};

ShareStyles.textarea1Style = { ...ShareStyles.textarea1 };
ShareStyles.textarea2Style = { ...ShareStyles.textarea2 };

export default ShareStyles;
