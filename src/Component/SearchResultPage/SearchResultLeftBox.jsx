import SearchResultList from "./SearchResultList";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

export default function SearchResultLeftBox({ searchResults }) {
    return (
        <div style={ShareStyles.SearchResultLeftBox}>
            <SearchResultList searchResults = {searchResults}/>
        </div>
    );
}