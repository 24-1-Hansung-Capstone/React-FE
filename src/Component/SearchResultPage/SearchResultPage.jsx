import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResultNav from "../ShareFolder/SearchResultNav";
import SearchResultLeftBox from "./SearchResultLeftBox";
import SearchResultRightBox from "./SearchResultRightBox";
import { getSearchResult } from "../ShareFolder/api";
import style from "./style/SearchResultPageStyle";

function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [summaryTitles, setSummaryTitles] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        getSearchResult(searchTerm, "search", (res) => {
            setSearchResults(res)

            const newSummaryTitles = []
            const news = searchResults.filter(res => res.category === "news")
            const blog = searchResults.filter(res => res.category === "blog")
            console.log("asdfasdfasdf", news)
            if (news.length < 2) {
                for (let i = 0; i < news.length; i++) {
                    newSummaryTitles.push([news[i]["esDto"]["title"], news[i]["esDto"]["url"]])
                }
            }
            else {
                for (let i = 0; i < 2; i++) {
                    newSummaryTitles.push([news[i]["esDto"]["title"], news[i]["esDto"]["url"]])
                }
            }
            if (blog.length < 2) {
                for (let i = 0; i < blog.length; i++) {
                    newSummaryTitles.push([blog[i]["esDto"]["title"], blog[i]["esDto"]["url"]])
                }
            }
            else {
                for (let i = 0; i < 2; i++) {
                    newSummaryTitles.push([blog[i]["esDto"]["title"], blog[i]["esDto"]["url"]])
                }
            }
            setSummaryTitles(newSummaryTitles)
        });
    }, [searchTerm]);

    return (
        <div>
            <section style={{}}>
                <SearchResultNav searchWord={searchTerm} searchUrlPath={"search"} />
                <div style={style.body}>
                    <SearchResultLeftBox searchResults={searchResults} />
                    <SearchResultRightBox searchTerm={searchTerm} searchResults={searchResults} summaryTitles = {summaryTitles}/> {/* title props 전달 */}
                </div>
            </section>
        </div>
    );
}

export default SearchResultPage;
