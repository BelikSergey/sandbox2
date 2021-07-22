import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from "../CardComponents/Card";
import CardContainer from "../Ui/CardContainer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TotalSum from "../TotalSum";
import SubmitButton from '../SubmitButton'
import selector from "../../redux/selectors";
import actions from "../../redux/bascetActions";
import data from "../../data/data";
import Sale from "../Sale";
import sales from '../Sale/Sale.list';
import ICard from '../../interfaces/card.interface';
import IObj from '../../interfaces/objSumId.interface'
import s from './bascetWithGoods.module.css'



const BascetWithGoods = () => {
  const [saleStep, setSaleStep] = useState(0);
 
  const [saleSum, setSaleSum] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector(selector.getProducts);
  const prodObj = useSelector(selector.getObjSumId);
  const sumOfOrder: number = useSelector(selector.getSumOrder);
useEffect(()=>{
  dispatch(actions.changeProducts(data));
},[dispatch])
useEffect(()=>{
  toast.dark('Система скидок:  свыше 10000 - 10%;   свыше 12000 - 12%;  свыше 15000 - 15%;', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
},[])

  const calcSum = useCallback(() => {
    let sum = 0;
    for (let item of prodObj) {
      sum += item.value;
    }
    return sum;
  }, [prodObj]);

useEffect(()=>{
if(products.length === 0){
  dispatch(actions.changeSumOfOrder(0));
}
},[products,dispatch])

  useEffect(() => {
    if (sumOfOrder >= 10000 && sumOfOrder < 12000) {
      setSaleSum(sumOfOrder * sales.sale10)
        setSaleStep(100-sales.sale10* 100)
        toast.info(`Ваша кидка - ${100-sales.sale10* 100} %`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }
    if (sumOfOrder >= 12000 && sumOfOrder < 15000){
      setSaleSum(sumOfOrder * sales.sale12) 
      setSaleStep(100-sales.sale12* 100)
      toast.info(`Ваша кидка - ${100-sales.sale12* 100} %`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    if (sumOfOrder >= 15000){
         setSaleSum(sumOfOrder * sales.sale15)
         setSaleStep(100-sales.sale15* 100)
         toast.info(`Ваша кидка - ${100-sales.sale15* 100} %`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }
    if (sumOfOrder < 10000 ) {
      setSaleSum(0)
        setSaleStep(0)
    }
  
 
  
  }, [sumOfOrder]);

  const sumOfOneCard = useCallback(
    (value: number, id: string) => {
      const item = { id: id, value: value };
      //  console.log(prodObj);
      let arr = prodObj;

      if (arr.length === 0) {
        arr.push(item);
        dispatch(actions.changeObjSumId(arr));
        //  console.log(prodObj);
      } else {
        let arrId = [];
        for (let it of arr) {
          arrId.push(it.id);
        }

        if (arrId.indexOf(id) === -1) {
          arr.push(item);
          dispatch(actions.changeObjSumId(arr));
        } else {
          for (let item of arr) {
            if (item.id === id) {
              item.value = value;
            }
          }
          dispatch(actions.changeObjSumId(arr));
        }
      }
      dispatch(actions.changeSumOfOrder(calcSum()));
    },
    [dispatch, prodObj, calcSum ]
  );

  const onDeleteCard = (id: string) => {
    const newProdList = products.filter((item: ICard) => {
      return item.id !== id;
    });
    dispatch(actions.changeProducts(newProdList));
    //  console.log(newProdList);
    const newProdObj = prodObj.filter((item: IObj) => {
      return item.id !== id;
    });
    dispatch(actions.changeObjSumId(newProdObj));
    // console.log(newProdList);
  };

  return (
    <div>
      <h2>Корзина</h2>
      {products && (
        <CardContainer>
          <TransitionGroup component="ul" >
          {products.map(
            ({ id, price, productName, img, alt, currency }: ICard) => (
              <CSSTransition key={id} timeout={250} classNames={s} >
              <Card
                key={id}
                price={price}
                productName={productName}
                img={img}
                alt={alt}
                currency={currency}
                id={id}
                onDelete={onDeleteCard}
                sendSum={sumOfOneCard}
              ></Card>
              </CSSTransition>
            )
          )}
          </TransitionGroup>
        </CardContainer>
      )}
      <TotalSum sum={sumOfOrder} />
      {(saleSum!==0) && <Sale sum={saleSum} sale={saleStep} />}
      <SubmitButton/>
    </div>
  );
};

export default BascetWithGoods;
