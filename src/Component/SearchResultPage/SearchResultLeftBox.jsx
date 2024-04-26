// src/Components/SearchResultPage/SearchResultLeftBox.jsx
import SearchResultList from "./SearchResultList";

export default function SearchResultLeftBox({ searchResults }) {
    return (
        <div style={{}}>
            <SearchResultList searchResults = {searchResults}/>
        </div>
    );
}