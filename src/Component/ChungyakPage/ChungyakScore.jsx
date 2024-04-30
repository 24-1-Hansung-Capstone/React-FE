import React from "react";
import ChungyakScoreTitle from "./ChangyakScoreTitle";
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
