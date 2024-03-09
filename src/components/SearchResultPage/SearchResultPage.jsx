import React from 'react';
import { useParams } from 'react-router-dom';

const SearchResultPage = () => {
    const {searchWord} = useParams();
    
    return (
        <div>
            {searchWord}에 대한 검색결과창입니다
        </div>
    );
}

export default SearchResultPage;