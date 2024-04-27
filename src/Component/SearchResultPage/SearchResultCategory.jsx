// src/Components/SearchResultPage/SearchResultCategory.jsx
import React, { useState } from "react";
import Pagination from "../ShareFolder/Pagination";
import HyperlinkPreview from "../ShareFolder/HyperlinkPreview";
import { TiNews } from "react-icons/ti";
import { GrBlog } from "react-icons/gr";
import { MdCardTravel, MdOutlineSentimentSatisfied, MdOutlineRealEstateAgent } from "react-icons/md";
import { RiCriminalLine } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";
import SearchResultCategoryHeader from "./SearchResultCategoryHeader";
import style from "./style/SearchResultCategoryStyle"

export default function SearchResultCategory({ searchResults, context }) {
    const [isOpen, setIsOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    const setPage = 5;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div style = {style.searchResultCategoryStyle}>
            <SearchResultCategoryHeader context={context} isOpen={isOpen} handleToggle={handleToggle} />
            {isOpen && (
                <div>
                    {
                        searchResults.map((item, index) => {
                            return(
                                <HyperlinkPreview title={item["esDto"]["title"]} itemPreview = {item["preview"]} url={item["esDto"]["url"]} />
                            )
                        })
                    }
                    <Pagination currentPage={currentPage} totalPages={totalPages} setPage={setPage} onPageChange={handlePageChange} />
                </div>
            )}
        </div>
    );
}
