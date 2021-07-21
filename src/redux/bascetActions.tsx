import types from './bascetActionsTypes';
import ICard from '../interfaces/card.interface'
import IObj from '../interfaces/objSumId.interface'


const changeProducts = (value: ICard[]) => {
  return {
    type: types.products,
    payload: value,
  };
};


const changeObjSumId = (value: IObj[]) => {
  return {
    type: types.objOfSumId,
    payload: value,
  };
};



const changeSumOfOrder = (value: number) => {
  return {
    type: types.sumOfAll,
    payload: value,
  };
};

const actions = {
  changeProducts,
  changeObjSumId,
  changeSumOfOrder,
};

export default actions;
