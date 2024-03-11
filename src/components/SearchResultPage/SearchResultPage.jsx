import React from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';

const SearchResultPage = () => {
    const {searchWord} = useParams();
    const [result, setResult] = useState(`${searchWord}에 대한 검색결과창입니다`)


    // 지정된 ID를 가진 유저에 대한 요청
    
    Axios.get(`http://localhost:8080/search?query=${searchWord}`)
        .then(response => {
            // 성공 핸들링
            setResult(response.data)
        })
        .catch(function (error) {
            // 에러 핸들링
            console.log(error);
        })
        .then(function () {
        // 항상 실행되는 영역
        });

    
    return (
        <div>
            {result}
        </div>
    );
}

export default SearchResultPage;