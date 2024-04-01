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
    menuLink: {
        color: '#191D21',
        textDecoration: 'none',
        fontFamily: "Roboto",
        fontWeight: 'bold'
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
    ToggleMenu: {
        marginRight: "5px",
        borderBottom: "1px solid gray",
        marginRight: "10px",
    },
    ResultDetailsContainer: {
        width: "50%",
        padding: "20px",
    },
    ResultDetailsItem: {
        marginTop: "20px",
        marginLeft: "100px",
    },
    ResultDetailsMenu: {
        borderBottom: "1px solid gray",
        width: "80%",
        marginLeft: "100px",
        marginRight: "50px",
    },
    RightBox: {
        paddingBottom: "10px",
        width: "100%", 
        padding: "20px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    LeftBox: {
        width: "50%",
        padding: "20px",
        marginTop: "20px",
        marginLeft: "100px",
        marginRight: "10px",
        marginBottom: "10px",
        flexBasis: "50%",
        fontSize: "35px",
    },
    ToggleList : {

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
    Box: {
        paddingBottom: "10px",
        width: "100%", 
        padding: "20px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        flexBasis: "50%",
    },
    section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexBasis: "80%",
    },
    textarea1: {
        width: "100%", // 필요에 따라 너비 조정
        minHeight: "100px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        resize: "vertical", // 사용자가 수직으로만 크기를 조정할 수 있게 함
        boxSizing: "border-box",
        border: "none", // 테두리 없음
        whiteSpace: "pre-wrap", // 자동 줄바꿈 활성화
        wrap: "soft", // 가로 스크롤 없음
    },
    textarea2: {
        width: "100%", // 필요에 따라 너비 조정
        minHeight: "200px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        resize: "vertical", // 사용자가 수직으로만 크기를 조정할 수 있게 함
        boxSizing: "border-box",
        backgroundColor: "#DCDCDC", // 배경색을 회색으로 설정
        border: "none", // 테두리 없음
    },

    inputArea: {
        flex: "1",
        padding: "10px",
        height: "500px",
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
        height: "30px",
        backgroundColor: "#92baff",
        border: "none",
        borderRadius: "40px",
        cursor: "pointer",
    },
    searchBarContainer: {
        border: "5px solid #92baff",
        borderRadius: "30px",
        width: "830px",
        height: "60px",
        display: 'flex',
        alignItems: 'center',
    },

};

ShareStyles.textarea1Style = { ...ShareStyles.textarea1 };
ShareStyles.textarea2Style = { ...ShareStyles.textarea2 };

export default ShareStyles;
