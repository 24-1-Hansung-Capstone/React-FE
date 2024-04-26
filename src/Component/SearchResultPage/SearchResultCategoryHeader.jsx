// src/Components/SearchResultPage/SearchResultCategoryHeader.jsx
import arrow_up from '../../Asset/arrow_up.svg';
import arrow_down from '../../Asset/arrow_down.svg';
import style from "./style/SearchResultCategoryHeaderStyle"

export default function SearchResultCategoryHeader({ context, isOpen, handleToggle }) {
    return (
        <div style={style.header} onClick={handleToggle}>
            <div style = {style.category}>
                {context}
            </div>
            <img src={isOpen ? arrow_up : arrow_down} alt={isOpen ? "arrow_up" : "arrow_down"} style={style.arrow} />
        </div>
        
    );
}