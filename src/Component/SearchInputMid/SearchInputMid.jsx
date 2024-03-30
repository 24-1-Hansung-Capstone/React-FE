// src/Components/SearchInputMid/SearchInputMid.jsx
import React from "react"
import SearchInput from '../SearchInput/SearchInput'

function Searchbar(props){
    return (
        <div style={{
            display: 'flex', // Flexbox 모델을 사용합니다.
            justifyContent: 'center', // 주 축(여기서는 수평 축)을 기준으로 중앙 정렬합니다.
            width: '100%', // 부모 컨테이너의 폭을 최대로 설정합니다.
        }}>
            
            <SearchInput></SearchInput>
        </div>
    )
}

export default Searchbar;