// CategoryButton.jsx
import React from "react";

function CategoryButton({ children }) {
    return (
        <div style={styles.button}>{children}</div>
    );
}

const styles = {
    button: {
        backgroundColor: "#61dafb",
        borderRadius: "40px",
        padding: "10px 20px",
        margin: "0 10px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

export default CategoryButton;
