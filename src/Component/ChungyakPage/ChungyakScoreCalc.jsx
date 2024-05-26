import React, { useEffect, useState } from "react";
import style from "./style/ChangyakScoreCalcStyle"

function ChungyakScoreCalc() {
    const [noHouseTimePoint, setHouseTimePoint] = useState(0);
    const [familyNumPoint, setFamilyNumPoint] = useState(0);
    const [savingTimePoint, setSavingTimePoint] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    function setNoHouseTime(years) {
        let score = 0;
        if (years < 0) score = 0;
        else if (years < 1) score = 2;
        else if (years < 2) score = 4;
        else if (years < 3) score = 6;
        else if (years < 4) score = 8;
        else if (years < 5) score = 10;
        else if (years < 6) score = 12;
        else if (years < 7) score = 14;
        else if (years < 8) score = 16;
        else if (years < 9) score = 18;
        else if (years < 10) score = 20;
        else if (years < 11) score = 22;
        else if (years < 12) score = 24;
        else if (years < 13) score = 26;
        else if (years < 14) score = 28;
        else if (years < 15) score = 30;
        else score = 32; // 15년 이상인 경우        
        setHouseTimePoint(score); // 계산된 점수를 상태로 설정
    }

    function setFamilyNum(familyNum) {
        if (familyNum >= 6) setFamilyNumPoint(35);
        else setFamilyNumPoint((familyNum + 1) * 5);
    }

    function setSavingTime(years) {
        let calculatedScore = 0;
        if (years < 0) calculatedScore = 0;
        else if (years < 0.5) {
            calculatedScore = 1;
        } else if (years < 1) {
            calculatedScore = 2;
        } else if (years < 2) {
            calculatedScore = 3;
        } else if (years < 3) {
            calculatedScore = 4;
        } else if (years < 4) {
            calculatedScore = 5;
        } else if (years < 5) {
            calculatedScore = 6;
        } else if (years < 6) {
            calculatedScore = 7;
        } else if (years < 7) {
            calculatedScore = 8;
        } else if (years < 8) {
            calculatedScore = 9;
        } else if (years < 9) {
            calculatedScore = 10;
        } else if (years < 10) {
            calculatedScore = 11;
        } else if (years < 11) {
            calculatedScore = 12;
        } else if (years < 12) {
            calculatedScore = 13;
        } else if (years < 13) {
            calculatedScore = 14;
        } else if (years < 14) {
            calculatedScore = 15;
        } else if (years < 15) {
            calculatedScore = 16;
        } else {
            calculatedScore = 17;
        }

        setSavingTimePoint(calculatedScore);
    }

    useEffect(() => {
        setTotalScore(noHouseTimePoint + familyNumPoint + savingTimePoint)
    }, [noHouseTimePoint, familyNumPoint, savingTimePoint])

    return (
        <div style={style.ChungyakScoreCalc}>
            <div style={style.div1}>
                내 무주택 기간은 <input style={style.input} type="number" onChange={(e) => { setNoHouseTime(parseInt(e.target.value)) }} /> 년
            </div>
            <div style={style.div2}>
                내 부양가족 수는 <input style={style.input} type="number" onChange={(e) => { setFamilyNum(parseInt(e.target.value)) }} /> 명
            </div>
            <div style={style.div3}>
                내 입주자 저축 기간은 <input style={style.input} type="number" onChange={(e) => { setSavingTime(parseInt(e.target.value)) }} step="0.5" /> 년
            </div>
            <div style = {style.result}>
                <span style = {style.score}>{totalScore}</span>점
            </div>
        </div>
    )
}

export default ChungyakScoreCalc;