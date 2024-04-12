// src/Asset/ShareStyles/ShareStyles.jsx
const ShareStyles = {
    SearchResultList: {
        fontSize:"10px"
    },
    SmallSearchLogo: {
        display: 'flex',
        alignItems: 'center',
    },
    SearchBarContainer: {
        border: "5px solid #92baff",
        borderRadius: "30px",
        width: "630px",
        height: "50px",
        display: 'flex',
        alignItems: 'center',
        marginTop: "40px",
        marginBottom: "40px",
    },
    CommonSearchBarContainer: {
        border: "3px solid #92baff",
        borderRadius: "30px",
        width: "530px",
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
    CommonLogo: {
        width: "150px",
        height: "70px",
    },
    SearchResultCategoryHeader: {
        marginRight: "15px",
        borderBottom: "1px solid gray",
        marginBottom: "2vh",
        fontSize: "25px",
    },
    SearchResultRightBox: {
        paddingBottom: "10px",
        width: "100vh", 
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        marginBottom: "20px",
        flexBasis: "100%",
        marginRight: "10px",
    },
    SearchResultLeftBox: {
        width: "100vh",
        padding: "20px",
        // marginTop: "35px",
        // marginLeft: "20px",
        // marginRight: "10px",
        // marginBottom: "35px",
        flexBasis: "50%",
        // fontSize: "20px",
    },
    SearchResultNav: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: "left", 
        marginBottom: "1vh", 
        paddingBottom: "1vh",
    },
    SearchResultHr: {
        border: "1px solid black",
        width: "100%",
    },
    SearchResultPage: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    SearchResultPageDivide: {
        flex: 1,
        display: "flex",
    },
    ArrowIcon: {
        width: "20px",
        height: "20px",
        marginLeft: "5px",
    },
    ChatTextarea: { 
        width: "80vh", // 필요에 따라 너비 조정
        minHeight: "40px", // 필요에 따라 최소 높이 조정
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
        width: "80vh", // 필요에 따라 너비 조정
        minHeight: "80px", // 필요에 따라 최소 높이 조정
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "#DCDCDC", // 배경색을 회색으로 설정
        border: "none", // 테두리 없음
        resize: "none",
        outline: "none", // 포커스 시 테두리 제거
        overflowY: 'scroll', // 필요시 수직 스크롤 추가
        fontSize: "20px",
    },
    SearchResult: {
        textAlign: "left", 
        color: "blue", 
        fontSize: "25px",
    },
    ChatQuestion: {
        textAlign: "right", 
        flex: "1",
        marginRight: "40px", 
        padding: "10px", 
        fontSize: "20px"
    },
    ChatAnswer: {
        textAlign: "left", 
        flex: "1",
        marginRight: "40px", 
        padding: "10px", 
        fontSize: "20px"
    },
    ChatSendMessageArea: {
        flex: "1",
        padding: "10px",
        width: "80%",
    },
    ChatMessageButton: {
        width: "120%",
        height: "40px",
        backgroundColor: "#92baff",
        border: "none",
        borderRadius: "40px",
        cursor: "pointer",
    },
    CommonPageDivide: {
        display: 'flex',
        width: '100%',
        height: '100vh',
    },
    CommonLeftPage: {
        flex: '1',
        position: 'relative',
        width: '100vh',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    CommonRightPage: {
        flex: '3',
        position: 'relative',
        width: '100%',
        height: '100vh',
        flexBasis: "150%",
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
        width: '40px', 
        height: '40px',
        paddingRight:"20px",
        cursor: 'pointer',
    },
    LogoMid: {
        display: 'flex', // Flexbox 모델을 사용합니다.
        justifyContent: 'center', // 주 축(여기서는 수평 축)을 기준으로 중앙 정렬합니다.
        width: '100%', // 부모 컨테이너의 폭을 최대로 설정합니다.
    },
};

export default ShareStyles;
