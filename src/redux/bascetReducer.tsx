import { combineReducers } from 'redux';
import types from './bascetActionsTypes';
import ICard from '../interfaces/card.interface'
import IObj from '../interfaces/objSumId.interface'


const productsReducer = (
  state: ICard[] = [] ,
  { type, payload }:any,
) => {
  switch (type) {
    case types.products:
      return payload;

    default:
      return state;
  }
};



const objSumIdReducer = (
  state: IObj[] = [],
 { type, payload }:any) => {
  switch (type) {
    case types.objOfSumId:
     
      return payload;

    default:
      return state;
  }
};



const sumOfOrderReducer = (
  state: number = 0,
  { type, payload }:any,
) => {
  switch (type) {
    case types.sumOfAll:
      return payload;

    default:
      return state;
  }
};



export default combineReducers({
  productCards: productsReducer,
  objSumID: objSumIdReducer,
  sumOrder: sumOfOrderReducer,
});