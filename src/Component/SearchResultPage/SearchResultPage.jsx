import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
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
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerm } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:8080/search?query=${searchTerm}`)
            .then(response => {
                // 성공 핸들링
                console.log(response.data)
                setSearchResults(response.data);
            })
            .catch(function (error) {
                // 에러 핸들링
                console.log(error);
            });
    }, [searchTerm]);


    return (
        <div>
            <section style={styles.home}>
                <Nav />
                <div style={styles.container}>
                    <LeftBox searchResults = {searchResults}/>
                    <RightBox searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
