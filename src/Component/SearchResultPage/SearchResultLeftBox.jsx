// src/Components/SearchResultPage/SearchResultLeftBox.jsx
import SearchResultList from "./SearchResultList";
import style from "./style/SearchResultLeftBoxStyle"

export default function SearchResultLeftBox({ searchResults, setSummary, summary, searchTerm, suggestQuery, isQueryChaged }) {
    return (
        <div style={style.leftBox}>
            <SearchResultList searchResults = {searchResults} setSummary={setSummary} summary={summary} searchTerm={searchTerm} suggestQuery={suggestQuery} isQueryChaged ={isQueryChaged }/>
        </div>
    );
}