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

export default function SearchResultCategory({ searchResults, context }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    const setPage = 5;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let iconComponent;
    switch (context) {
        case "뉴스":
            iconComponent = <TiNews />;
            break;
        case "블로그":
            iconComponent = <GrBlog />;
            break;
        case "관광지":
            iconComponent = <MdCardTravel />;
            break;
        case "범죄율":
            iconComponent = <RiCriminalLine />;
            break;
        case "지역 만족도":
            iconComponent = <MdOutlineSentimentSatisfied />;
            break;
        case "청약 공고":
            iconComponent = <TbBuildingEstate />;
            break;
        case "부동산 정보":
            iconComponent = <MdOutlineRealEstateAgent />;
            break;
        default:
            iconComponent = null;
    }

    return (
        <div>
            <SearchResultCategoryHeader context={context} iconComponent={iconComponent} isOpen={isOpen} handleToggle={handleToggle} />
            
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
