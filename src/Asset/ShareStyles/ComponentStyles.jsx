// ComponentStyles.jsx
const ComponentStyles = {
        SearchResultList: {
            width: "90vh", 
            fontSize:"10px",
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
        },
        CommonSearchBarContainer: {
            border: "3px solid #92baff",
            borderRadius: "30px",
            width: "530px",
            height: "40px",
        },
        SearchRecommend: {
            backgroundColor: "#92baff",
            borderRadius: "40px",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
        },
        CommonLogo: {
            width: "150px",
            height: "70px",
        },
        SearchResultCategoryHeader: {
            fontSize: "25px",
        },
        SearchResultRightBox: {
            width: "70vh", 
        },
        SearchResultLeftBox: {
            width: "90vh",
        },
        SearchResultHr: {
            border: "1px solid black",
            width: "100%",
        },
        SearchResultPage: {
            width: "100%",
            height: "100%",
        },
        ArrowIcon: {
            width: "20px",
            height: "20px",
        },
        ChatTextarea: { 
            width: "80vh", // 필요에 따라 너비 조정
            minHeight: "50px", // 필요에 따라 최소 높이 조정
            padding: "10px",
            border: "none", // 테두리 없음
            maxHeight: '300px', 
            minHeight: '300px',
        },
        ChatbotInput: {
            width: "80vh", // 필요에 따라 너비 조정
            minHeight: "80px", // 필요에 따라 최소 높이 조정
            padding: "10px",
            backgroundColor: "#DCDCDC", // 배경색을 회색으로 설정
            border: "none", // 테두리 없음
            fontSize: "20px",
        },
        SearchResult: {
            textAlign: "left", 
            color: "blue", 
            fontSize: "25px",
        },
        ChatQuestion: {
            textAlign: "right", 
            marginRight: "40px", 
            padding: "10px", 
            fontSize: "20px"
        },
        ChatAnswer: {
            textAlign: "left", 
            marginRight: "40px", 
            padding: "10px", 
            fontSize: "20px"
        },
        ChatSendMessageArea: {
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
            width: '100%',
            height: '100vh',
        },
        CommonLeftPage: {
            width: '100vh',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
        CommonRightPage: {
            width: '100%',
            height: '100vh',
        },
        CommonSearchBarStyle: {
            backgroundColor: 'transparent',
            border: "none",
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
            width: '100%',
        },
    };
    

export default ComponentStyles;
