// src/Components/SearchResultPage/SearchResultCategoryHeader.jsx
import arrow_up from '../../Asset/arrow_up.svg';
import arrow_down from '../../Asset/arrow_down.svg';
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

export default function SearchResultCategoryHeader({ context, iconComponent, isOpen, handleToggle }) {
    return (
        <div style={{...PageStyles.SearchResultCategoryHeader, ...ComponentStyles.SearchResultCategoryHeader}} onClick={handleToggle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    {context}
                    {iconComponent}
                </div>
                <img src={isOpen ? arrow_up : arrow_down} alt={isOpen ? "arrow_up" : "arrow_down"} style={{...PageStyles.ArrowIcon, ...ComponentStyles.ArrowIcon}} />
            </div>
        </div>
    );
}