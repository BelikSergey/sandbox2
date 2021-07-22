import React from "react";
interface ITotalSum {
  sum: number;
}
const TotalSum =({ sum}: ITotalSum) => {
  return (
    <div className="Total__Sum__Container">
       <h3 className="Total__Sum__Title">Общая сумма</h3>
      <span className="Total__Sum">{sum} ₴</span>
      {/* <span className="Currency__Title"></span> */}
    </div>
  );
};

export default TotalSum;