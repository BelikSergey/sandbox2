



const getProducts = (state:any) =>state.productCards;
const getObjSumId = (state:any) => state.objSumID;
const getSumOrder = (state:any) => state.sumOrder;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts,
  getObjSumId,
  getSumOrder,
};