import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import LeftBox from "../LeftBox/LeftBox";
import RightBox from "../RightBox/RightBox";

const styles = {
    home: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    container: {
        flex: 1,
        display: "flex",
    },
};

function SearchResultPage() {
    const { searchTerm } = useParams();

    return (
        <div>
            <section style={styles.home}>
                <Nav />
                <div style={styles.container}>
                    <LeftBox />
                    <RightBox searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
