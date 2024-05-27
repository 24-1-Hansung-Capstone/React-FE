import React from "react";
import ChungyakScoreCalc from "./ChungyakScoreCalc"
import style from "./style/ChangyakScoreStyle"

const ChungyakScore = () => {
  return (
    <div style={style.changyakScore}>
      <ChungyakScoreCalc/>
    </div>
  );
};

export default ChungyakScore;
