import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import selector from '../../redux/selectors'



const SubmitButtom = () => {
  // const dispatch = useDispatch();
  const products = useSelector(selector.getProducts);
  const prodObj = useSelector(selector.getObjSumId);

  const submitFunc = ()=>{
let ArrOrders = [];
    for (let prod of products){
      for (let item of prodObj){
      if (item.id === prod.id){
let quantity = item.value/prod.price;
const newProd = {...prod};
newProd.order = quantity
ArrOrders.push(newProd);
      }
      }
    }

    console.log(ArrOrders);
  }


 
  
  return (
    <div className="Card__Button__Submit">
      <Button
      size="large"
      // className="Card__Button__Submit"
      variant="contained"
       color="primary"
        type="button"
        onClick={submitFunc}
      >
        ОФОРМИТЬ
      </Button>
    </div>
  );
};

export default SubmitButtom;
