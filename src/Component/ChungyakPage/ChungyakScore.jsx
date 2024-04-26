import React from "react";
import ChungyakScoreTitle from "./ChangyakScoreTitle";
import ChungyakScoreCalc from "./ChungyakScoreCalc"

const ChungyakScore = () => {
  return (
    <div style={{marginBottom:"40px"}}>
      <ChungyakScoreTitle/>
      <ChungyakScoreCalc/>
    </div>
  );
};

export default ChungyakScore;
