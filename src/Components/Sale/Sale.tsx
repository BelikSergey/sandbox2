import React from "react";

interface ISale {
  sum: number;
  sale: number;
}

const Sale = ({ sum, sale }: ISale) => {
  return (
    <div className="Total__Sum__Container">
       <h3 className="Total__Sum__Title">Размер скидки <span className="Total__Sum">{sale} %</span></h3>
      <h3 className="Total__Sum__Title">К оплате -  <span className="Total__Sum">{sum} ₴</span></h3>
     
    </div>
  );
};

export default Sale;
