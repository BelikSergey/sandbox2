import React, { useState } from "react";
import Button from "../DeleteButtom";
import Quantity from "../Quantity";
import SumProduct from "../SumProduct";

function Card() {
  const [amount, setAmount] = useState(0);

  // const OnDeleteProduct = () =>{
  //   // удаляет один товар из списка
  //   console.log('удалил товар')
  // }
  const changeSum = (value: number) => {
    setAmount(value);
    console.log(value);
  };

  return (
    <div>
      <Quantity OnChangeInput={changeSum} />
      <SumProduct sum={amount} />
      <Button onClick={() => console.log("удалить")}></Button>
    </div>
  );
}

export default Card;
