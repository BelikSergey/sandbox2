import React, { useState, useEffect } from "react";
import Button from "../DeleteButtom";
import Quantity from "../Quantity";
import SumProduct from "../SumProduct";
import ProductName from "../ProductName";
import Price from "../Price";
// import ICard from '../../../interfaces/card.interface'

interface ICard {
  productName: string;
  img: string;
  alt: string;
  description?: string;
  price: number;
  currency: string;
  id: string;
  sendSum(value: number, id: string): void;
  onDelete(id: string): void;
}

const Card = ({
  sendSum,
  productName,
  img,
  price,
  alt,
  currency,
  id,
  onDelete
}: ICard) => {
  const [amount, setAmount] = useState(1);
  const [sumOfProduct, setSumOfProduct] = useState(0);
  // const [idCard, setidCard] = useState(id);

  useEffect(() => {
    const sum = amount * price;
    sendSum(sum, id);
    setSumOfProduct(sum);
   
  }, []);

  useEffect(() => {
    sendSum(sumOfProduct, id);
  }, [sumOfProduct,sendSum, id]);


  const changeSum = (value: number) => {
    setAmount(value);
    setSumOfProduct(value * price);
  };

  return (
    <li className="Container__List" id={id}>
      <ProductName src={img} alt={alt} prodName={productName} />
      <Quantity OnChangeInput={changeSum} />
      <Price price={price} currency={currency} />
      <SumProduct sum={sumOfProduct} />
      <Button onDelete={onDelete} id={id}></Button>
    </li>
  );
};

export default Card;
