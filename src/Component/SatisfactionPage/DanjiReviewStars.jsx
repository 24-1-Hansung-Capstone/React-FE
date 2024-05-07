import React, { useRef, useEffect } from "react";
import style from "./style/DanjiReviewStarsStyle";

function DanjiReviewStars({ setSelectedDesc, danjiData, setReview}) {
    const totalScoreRef = useRef(null);
    const trafficScoreRef = useRef(null);
    const careScoreRef = useRef(null);
    const residentScoreRef = useRef(null);
    const aroundScoreRef = useRef(null);

    useEffect(() => {
        setTotalDesc();
    }, []);

    const setTotalDesc = () => {
        setSelectedDesc(danjiData.totalDesc);
        setBackgroundColor(totalScoreRef.current);
        setReview(danjiData.totalDesc);
    };
    const setTrafficDesc = () => {
        setSelectedDesc(danjiData.trafficDesc);
        setBackgroundColor(trafficScoreRef.current);
        setReview(danjiData.trafficDesc);
    };
    const setCareDesc = () => {
        setSelectedDesc(danjiData.careDesc);
        setBackgroundColor(careScoreRef.current);
        setReview(danjiData.careDesc);
    };
    const setResidentDesc = () => {
        setSelectedDesc(danjiData.residentDesc);
        setBackgroundColor(residentScoreRef.current);
        setReview(danjiData.residentDesc);
    };
    const setAroundDesc = () => {
        setSelectedDesc(danjiData.aroundDesc);
        setBackgroundColor(aroundScoreRef.current);
        setReview(danjiData.aroundDesc);
    };

    const setBackgroundColor = (nowSelected) => {
        totalScoreRef.current && (totalScoreRef.current.style.backgroundColor = "transparent");
        trafficScoreRef.current && (trafficScoreRef.current.style.backgroundColor = "transparent");
        careScoreRef.current && (careScoreRef.current.style.backgroundColor = "transparent");
        residentScoreRef.current && (residentScoreRef.current.style.backgroundColor = "transparent");
        aroundScoreRef.current && (aroundScoreRef.current.style.backgroundColor = "transparent");

        nowSelected && (nowSelected.style.backgroundColor = "#d3d3d3");
    };

    function renderStars(score) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                stars.push(<span key={i}>★</span>);
            } else {
                stars.push(<span key={i}>☆</span>);
            }
        }
        return stars;
    }

    function renderCircles(score) {
        const circles = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                circles.push(<span key={i}>●</span>);
            } else {
                circles.push(<span key={i}>◌</span>);
            }
        }
        return circles;
    }

    return (
        <div style={style.stars}>
            <span ref={totalScoreRef} style={style.item} onClick={setTotalDesc}>
                ⭐추천점수: {renderStars(danjiData.totalScore)}
            </span>
            <span ref={trafficScoreRef} style={style.item} onClick={setTrafficDesc}>
                🚌교통여건: {renderCircles(danjiData.trafficScore)}
            </span>
            <span ref={careScoreRef} style={style.item} onClick={setCareDesc}>
                💂‍♀단지관리: {renderCircles(danjiData.careScore)}
            </span>
            <span ref={residentScoreRef} style={style.item} onClick={setResidentDesc}>
                🏢거주환경: {renderCircles(danjiData.residentScore)}
            </span>
            <span ref={aroundScoreRef} style={style.item} onClick={setAroundDesc}>
                🚑️주변환경: {renderCircles(danjiData.aroundScore)}
            </span>
        </div>
    );
}

export default DanjiReviewStars;
