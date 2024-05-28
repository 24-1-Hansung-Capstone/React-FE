// src/Components/SearchResultPage/SearchResultCategory.jsx
import React, { useState } from "react";
import PaginationBar from "../ShareFolder/PaginationBar";
import HyperlinkPreview from "../ShareFolder/HyperlinkPreview";
import SearchResultCategoryHeader from "./SearchResultCategoryHeader";
import style from "./style/SearchResultCategoryStyle"
import { useNavigate } from "react-router-dom";
import { getSummary } from "../ShareFolder/api";

export default function SearchResultCategory({ searchTerm, searchResults, context, setSummary, summary}) {
    const [isOpen, setIsOpen] = useState(true); // 검색결과 아이템을 띄울 것인가?
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [isClickable, setClickable] = useState(true);
    const totalItem = 5; // 페이지에 띄울 아이템 개수
    const totalPages = parseInt(searchResults.length / totalItem) + (searchResults.length % totalItem !== 0 ? 1 : 0); // 전체 페이지 개수

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const highlightSearchTerm = (text, term) => {
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    };

    const displayItem = searchResults.slice(5 * (currentPage - 1),
        currentPage === totalPages ? undefined // 맨 마지막 페이지라면, 마지막 데이터까지 자른다.
            : 5 * currentPage) // 중간 페이지라면, setpage만큼 띄운다 

    return (
        <div style={style.searchResultCategoryStyle}>
            <SearchResultCategoryHeader context={context} isOpen={isOpen} handleToggle={handleToggle} />
            {isOpen && (
                <div>
                    {
                        searchResults.length ? 
                            displayItem.map((item, index) => {
                                const highlightedPreview = highlightSearchTerm(item["preview"], searchTerm);
                                return (
                                    <HyperlinkPreview 
                                        id={index} title={item["esDto"]["title"]}
                                        isVisitKoreaItem={item.category === "visitkorea"}
                                        isNews={item.category === "news"}
                                        itemPreview={highlightedPreview} url={item["esDto"]["url"]}
                                        isClickable={isClickable}
                                        setSummary={
                                            () => {
                                                setClickable(false)
                                                getSummary(
                                                    "nlpModel/summary",
                                                    { url : item["esDto"]["url"]},
                                                    res => {
                                                        setClickable(true);
                                                        setSummary([...summary, item["esDto"]["title"], res])
                                                    })}}/>
                                )
                            })
                        :
                            "검색 결과가 없습니다."
                    }
                    <PaginationBar currentPage={currentPage} totalPages={totalPages} totalItem={totalItem} onPageChange={setCurrentPage} />
                </div>
            )}
        </div>
    );
}
