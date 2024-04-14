// PageStyle.jsx
const PageStyles = {
    SmallSearchLogo: {
        display: 'flex',
        alignItems: 'center',
    },
    SearchBarContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "40px",
        marginBottom: "40px",
    },
    CommonSearchBarContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "20px",
        marginBottom: "20px",
    },
    SearchRecommend: {
        display: 'flex',
        alignItems: 'center',
        padding: "8px 20px",
        margin: "0 10px",
    },
    SearchResultCategoryHeader: {
        marginRight: "15px",
        borderBottom: "1px solid gray",
        marginBottom: "2vh",
    },
    SearchResultRightBox: {
        paddingBottom: "10px",
        display: 'flex',
        marginBottom: "20px",
        flexBasis: "50%",
    },
    SearchResultLeftBox: {
        display: 'flex',
        flexBasis: "50%",
    },
    SearchResultNav: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: "left", 
        marginBottom: "1vh", 
        paddingBottom: "1vh",
    },
    SearchResultPage: {
        display: "flex",
        flexDirection: "column",
    },
    SearchResultPageDivide: {
        flex: 1,
        display: "flex",
    },
    ArrowIcon: {
        marginLeft: "5px",
    },
    ChatTextarea: { 
        resize: "vertical", // 사용자가 수직으로만 크기를 조정할 수 있게 함
        boxSizing: "border-box",
        whiteSpace: "pre-wrap", // 자동 줄바꿈 활성화
        wrap: "soft", // 가로 스크롤 없음
        overflowY: 'scroll', 
    },
    ChatbotInput: {
        boxSizing: "border-box",
        resize: "none",
        outline: "none", // 포커스 시 테두리 제거
        overflowY: 'scroll', // 필요시 수직 스크롤 추가
    },
    ChatQuestion: {
        flex: "1",
    },
    ChatAnswer: {
        flex: "1",
    },
    ChatSendMessageArea: {
        flex: "1",
    },
    CommonPageDivide: {
        display: 'flex',
    },
    CommonLeftPage: {
        flex: '1',
        position: 'relative',
    },
    CommonRightPage: {
        flex: '3',
        position: 'relative',
        flexBasis: "150%",
    },
    CommonSearchBarStyle: {
        outline: "none",
    },
    LogoMid: {
        display: 'flex',
        justifyContent: 'center',
    },
};
export default PageStyles;
