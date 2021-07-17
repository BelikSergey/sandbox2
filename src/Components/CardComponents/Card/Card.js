import React from "react";
// import Button from '../DeleteButton'
import Quantity from "../Quantity";

function Card() {
  // const OnDeleteProduct = () =>{
  //   // удаляет один товар из списка
  //   console.log('удалил товар')
  // }

  return (
    <div>
      <Quantity />
      {/* <Button onClick={OnDeleteProduct}></Button> */}
    </div>
  );
}

export default Card;
