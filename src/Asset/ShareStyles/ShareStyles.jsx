// src/Asset/ShareStyles/ShareStyles.jsx
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
        marginTop: "40px",
        marginBottom: "40px",
    },
    CommonSearchBarContainer: {
        border: "3px solid #92baff",
        borderRadius: "30px",
        width: "630px",
        height: "40px",
        display: 'flex',
        alignItems: 'center',
        marginTop: "20px",
        marginBottom: "20px",
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
    logo: {
        width: "200px",
        height: "100px",
    },
    SearchResultCategory: {
        marginRight: "15px",
        borderBottom: "1px solid gray",
        marginBottom: "50px",
        fontSize: "30px",
    },
    SearchResultRightBox: {
        paddingBottom: "10px",
        width: "90%", 
        padding: "10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        marginLeft: "30px",
        marginBottom: "20px",
    },
    SearchResultLeftBox: {
        width: "180%",
        padding: "20px",
        marginTop: "35px",
        marginLeft: "20px",
        marginRight: "10px",
        marginBottom: "35px",
        flexBasis: "150%",
        fontSize: "30px",
    },
    SearchResultNav: {
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
        flexBasis: "60%",
    },
    textarea: {
        width: "100%", // 필요에 따라 너비 조정
        minHeight: "80px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        resize: "vertical", // 사용자가 수직으로만 크기를 조정할 수 있게 함
        boxSizing: "border-box",
        border: "none", // 테두리 없음
        whiteSpace: "pre-wrap", // 자동 줄바꿈 활성화
        wrap: "soft", // 가로 스크롤 없음
        overflowY: 'scroll', 
        maxHeight: '300px', 
        minHeight: '300px',
    },
    ChatbotInput: {
        width: "100%", // 필요에 따라 너비 조정
        minHeight: "120px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "#DCDCDC", // 배경색을 회색으로 설정
        border: "none", // 테두리 없음
        resize: "none",
        outline: "none", // 포커스 시 테두리 제거
        overflowY: 'scroll', // 필요시 수직 스크롤 추가
        fontSize: "20px",
    },
    searchResult: {
        textAlign: "left", 
        color: "blue", 
        fontSize: "30px",
    },
    chatarea1: {
        textAlign: "right", 
        flex: "1",
        marginRight: "40px", 
        padding: "10px", 
        fontSize: "20px"
    },
    chatarea2: {
        textAlign: "left", 
        flex: "1",
        marginRight: "40px", 
        padding: "10px", 
        fontSize: "20px"
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
        width: "120%",
        height: "40px",
        backgroundColor: "#92baff",
        border: "none",
        borderRadius: "40px",
        cursor: "pointer",
    },
    Chungyak: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        position: 'relative',
    },

    ChungyakLogo: {
        flex: '1',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        zIndex: 100,
    },
    LeftPageStyle: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        position: 'relative',
    },
    LeftPageDetailStyle: {
        flex: '1',
        position: 'absolute',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        zIndex: 100,
    },
    CommonSearchBarStyle: {
        backgroundColor: 'transparent',
        border: "none",
        outline: "none",
        width: "600px",
        height: "20px",
        fontSize: "15px",
        fontFamily: "Roboto",
        paddingLeft: "10px",
    },
    CommonIconStyle: {
        width: '20px', 
        height: '20px',
        paddingRight:"20px",
        cursor: 'pointer'
    },
    MainSearchBarStyle: {
        backgroundColor: 'transparent',
        border: "none",
        outline: "none",
        width: "800px",
        height: "40px",
        fontSize: "20px",
        fontFamily: "Roboto",
        paddingLeft: "20px",
    },
    MainIconStyle: {
        width: '50px', 
        height: '50px',
        paddingRight:"20px",
        cursor: 'pointer'
    },
    MapSection: {
        width: "360px",
        height: "100vh",
        marginleft: "-17px",
    },
};

export default ShareStyles;
