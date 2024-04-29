// src/Components/SearchResultPage/SearchResultLeftBox.jsx
import SearchResultList from "./SearchResultList";
import style from "./style/SearchResultLeftBoxStyle"

export default function SearchResultLeftBox({ searchResults }) {
    return (
        <div style={style.leftBox}>
            <SearchResultList searchResults = {searchResults}/>
        </div>
    );
}