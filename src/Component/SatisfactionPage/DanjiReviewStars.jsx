import React, { useRef, useState } from "react"

const starStyle = {
    borderRadius: "10%",
    marginRight: "2%",
    padding: "0.1%",
    backgroundColor: "white",
    cursor: "pointer"
}

function DanjiReviewStars({ setSelectedDesc, danjiData }) {
    const totalScore = useRef();
    const trafficScore = useRef();
    const careScore = useRef();
    const residentScore = useRef();
    const aroundScore = useRef();

    const setBackgroundColor = (nowSelected) => {
        totalScore.current.style.backgroundColor = "white";
        trafficScore.current.style.backgroundColor = "white";
        careScore.current.style.backgroundColor = "white";
        residentScore.current.style.backgroundColor = "white";
        aroundScore.current.style.backgroundColor = "white";
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

    // setBackgroundColor(totalScore.current)


    return (
        <div style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "flex-start",
            fontSize : "15px"
        }}>
            <span ref={totalScore} style={{
                borderRadius: "10%",
                marginRight: "2%",
                padding: "0.1%",
                backgroundColor: "#92baff",
                cursor: "pointer"
            }} onClick={setTotalDesc}>⭐추천점수: {danjiData.totalScore}</span>
            <span ref={trafficScore} style={starStyle} onClick={setTrafficDesc}>🚌교통여건: {danjiData.trafficScore}</span>
            <span ref={careScore} style={starStyle} onClick={setCareDesc}>💂‍♀단지관리: {danjiData.careScore}</span>
            <span ref={residentScore} style={starStyle} onClick={setResidentDesc}>🏢거주환경: {danjiData.residentScore}</span>
            <span ref={aroundScore} style={starStyle} onClick={setAroundDesc}>🚑️주변환경: {danjiData.aroundScore}</span>
        </div>
    )
}

export default DanjiReviewStars