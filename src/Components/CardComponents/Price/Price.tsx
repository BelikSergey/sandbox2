import React from "react";

interface IPrice {
  price: number;
  currency: string;
}

const Price = ({ price, currency }: IPrice) => {
  return (
    <div>
      <span className="Sum__Title">{price}</span>
      <span className="Currency__Title">{currency}</span>
    </div>
  );
};

export default Price;
