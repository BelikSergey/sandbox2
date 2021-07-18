import React from "react";
interface ISum {
  sum: number;
}
const SumProduct = ({ sum }: ISum) => {
  return (
    <div>
      <span className="">{sum}</span>
    </div>
  );
};

export default SumProduct;
