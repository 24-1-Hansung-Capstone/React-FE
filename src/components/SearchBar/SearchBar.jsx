import { useState, EventHandler, ReactNode } from 'react'
import SearchButton from "./SearchButtonpng.png"

const SearchBar = () => {
	return (<div className="w-[512px] h-[43px] flex flex-row items-center justify-center gap-[20px] bg-[#fff] overflow-hidden" style={{zIndex: 999}}>
  <div className="flex-1 h-[43px] flex flex-col items-start justify-between justify-center py-0 px-[8px] bg-[#fff] border-[5px] border-solid border-[#92baff] rounded-[4px]">
    <div className="w-[422px] flex flex-row items-center justify-start py-[8px] px-0">
      <input className="flex-1 text-[14px] leading-[24px] font-['Roboto'] text-[#656f77]"
            placeholder='홈즈 검색 또는 지도에서 클릭'
      />
    </div>
  </div>
  <img width="28" height="27" src={SearchButton}/>
</div>)
}

export default SearchBar