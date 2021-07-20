import React, {useState, useEffect, useCallback } from "react";
import Card from "../CardComponents/Card";
import CardContainer from '../Ui/CardContainer'
import TotalSum from "../TotalSum";
import data from '../../data/data.json'




interface IProd {
  productName: string;
  img: string;
  alt: string;
  description: string;
  price: number;
  currency: string;
  id: string;
}
interface IArr{
id: string,
value: number,
}

type TArr = IArr[];
const arrForSum: TArr = [] 

const BascetWithGoods = () => {
const [sumOfAllProd, setsumOfAllProd] = useState(0);
const [prodObj, setProdObj] = useState(arrForSum);
const [products, setProducts] = useState(data);


useEffect(()=>{
 
  let sum=0;
  for (let it of prodObj){
    sum = sum + it.value;
  }
  setsumOfAllProd(sum);
},[prodObj])


  const sumOfAll =useCallback ((value: number , id: string) => {
  const item = {id: id, value: value};

  let arr: TArr = prodObj;
  // let sum = []

  if (arr.length === 0) {
    arr.push(item)
    setProdObj(arr)
  } else { 
    let arrId = []
    for (let it of prodObj){
      arrId.push(it.id)
  };

  if(arrId.indexOf(id)=== -1){

    arr.push(item);
    setProdObj(arr);

    } else {
   for(let item of arr){
   if(item.id===id){
   item.value=value;
}
}
setProdObj(arr);

}
}
let sum = 0
for (let item of arr){
     sum += item.value;
// console.log(sum);

    }
    setsumOfAllProd(sum);
 },[prodObj]);

  return (
    <div>
      <h2>Корзина</h2>
    <CardContainer>
      {products.map((prod: IProd) =>(
        <Card key={prod.id}
        price={prod.price} 
        productName={prod.productName} 
        img={prod.img}
        alt={prod.alt}
        currency={prod.currency}
        id={prod.id}
        // sendSum={()=>console.log('пришли данные в корзину')}
        sendSum={sumOfAll}
        ></Card>
      ))
     } 
    </CardContainer>
      <TotalSum sum={sumOfAllProd}/>
    </div>
  );
}

export default BascetWithGoods;