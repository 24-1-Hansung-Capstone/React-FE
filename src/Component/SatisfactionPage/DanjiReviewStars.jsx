import React, { useRef, useState } from "react"
import style from "./style/DanjiReviewStarsStyle"

function DanjiReviewStars({ setSelectedDesc, danjiData }) {
    const totalScore = useRef();
    const trafficScore = useRef();
    const careScore = useRef();
    const residentScore = useRef();
    const aroundScore = useRef();

    const setBackgroundColor = (nowSelected) => {
        totalScore.current.style.backgroundColor = "transparent";
        trafficScore.current.style.backgroundColor = "transparent";
        careScore.current.style.backgroundColor = "transparent";
        residentScore.current.style.backgroundColor = "transparent";
        aroundScore.current.style.backgroundColor = "transparent";

        nowSelected.style.backgroundColor = "#92baFF";
    }

    const setTotalDesc = (e) => {
        setSelectedDesc(danjiData.totalDesc)
        setBackgroundColor(totalScore.current)
    }
    const setTrafficDesc = (e) => {
        setSelectedDesc(danjiData.trafficDesc)
        setBackgroundColor(trafficScore.current)
    }
    const setCareDesc = (e) => {
        setSelectedDesc(danjiData.careDesc)
        setBackgroundColor(careScore.current)
    }
    const setResidentDesc = (e) => {
        setSelectedDesc(danjiData.residentDesc)
        setBackgroundColor(residentScore.current)
    }
    const setAroundDesc = (e) => {
        setSelectedDesc(danjiData.aroundDesc)
        setBackgroundColor(aroundScore.current)
    }


    return (
        <div style={style.stars}>
            <span ref={totalScore} style={style.item} onClick={setTotalDesc}>⭐추천점수: {danjiData.totalScore}</span>
            <span ref={trafficScore} style={style.item} onClick={setTrafficDesc}>🚌교통여건: {danjiData.trafficScore}</span>
            <span ref={careScore} style={style.item} onClick={setCareDesc}>💂‍♀단지관리: {danjiData.careScore}</span>
            <span ref={residentScore} style={style.item} onClick={setResidentDesc}>🏢거주환경: {danjiData.residentScore}</span>
            <span ref={aroundScore} style={style.item} onClick={setAroundDesc}>🚑️주변환경: {danjiData.aroundScore}</span>
        </div>
    )
}

export default DanjiReviewStars