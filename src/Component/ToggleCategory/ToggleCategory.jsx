import React, { useState } from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import Pagination from "../Pagination/Pagination";
import HyperlinkPreview from "../HyperlinkPreview/HyperlinkPreview";
import { TiNews } from "react-icons/ti";
import { GrBlog } from "react-icons/gr";
import { MdCardTravel, MdOutlineSentimentSatisfied, MdOutlineRealEstateAgent } from "react-icons/md";
import { RiCriminalLine } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";
import arrow_up from '../../Asset/arrow_up.svg';
import arrow_down from '../../Asset/arrow_down.svg';

export default function ToggleCategory({ searchResults, context }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;

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
            <div style={ShareStyles.ToggleCategory} onClick={handleToggle}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        {context}
                        {iconComponent}
                    </div>
                    <img src={isOpen ? arrow_up : arrow_down} alt={isOpen ? "arrow_up" : "arrow_down"} style={ShareStyles.arrowIcon} />
                </div>
            </div>
            {isOpen && (
                <div>
                    {
                        searchResults.map((item, index) => {
                            return(
                                <HyperlinkPreview title={item["esDto"]["title"]} itemPreview = {item["preview"]} url={item["esDto"]["url"]}></HyperlinkPreview>
                            )
                        })
                    }
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            )}
        </div>
    );
}
