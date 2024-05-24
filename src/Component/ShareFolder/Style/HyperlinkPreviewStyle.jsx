const style = {
    item: {
        marginBottom: "40px"
    },
    title: {
        fontSize: "23px",
        marginBottom: "15px"
    },
    preview: {
        fontSize: "17px"
    },
    button: {
        display: "inline-flex",
        color: "white",
        fontWeight: "bold",
        outline: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        height: "2.25rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        
        background: "$blue", // 주석 사용
        ':hover': {
            background: "lighten($blue, 10%)" // 색상 10% 밝게
        },
        ':active': {
            background: "darken($blue, 10%)" // 색상 10% 어둡게
        }
    },

};

export default style;
