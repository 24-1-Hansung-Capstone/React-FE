// src/Components/SearchResultPage/SearchResultLeftBox.jsx
import SearchResultList from "./SearchResultList";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

export default function SearchResultLeftBox({ searchResults }) {
    return (
        <div style={{...PageStyles.SearchResultLeftBox, ...ComponentStyles.SearchResultLeftBox}}>
            <SearchResultList searchResults = {searchResults}/>
        </div>
    );
}