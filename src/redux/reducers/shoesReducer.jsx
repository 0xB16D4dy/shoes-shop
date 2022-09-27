import { createSlice } from '@reduxjs/toolkit'
import {http} from '../../utils/tools'

const initialState = {
    arrShoes:[],
    shoesDetail:[],
    arrShoeCarts: [],
}

const productReducer = createSlice({
  name: 'shoesReducer',
  initialState,
  reducers: {
    getshoesAction:(state,action)=>{
      const arrShoes=action.payload;
      state.arrShoes=arrShoes
    },
    getshoesDetailAction:(state,action)=>{
      const shoesDetail=action.payload;
      state.shoesDetail=shoesDetail
    },
    addShoeToCartAction: (state, action) => {
      const shoe = action.payload;
      let index = state.arrShoeCarts.findIndex((item) => item.id === shoe.id);
      if (index !== -1) {
        state.arrShoeCarts[index].quantity += 1;
      } else {
        state.arrShoeCarts.push(shoe);
      }
    },
    deleteShoeToCartAction: (state, action) => {
      const id = action.payload;
      state.arrShoeCarts = state.arrShoeCarts.filter((item) => item.id !== id);
    },
    cleanCart: (state, action) => {
      state.arrShoeCarts = action.payload;
    },
  }
});

export const {getshoesAction,getCartAction,getshoesDetailAction,addShoeToCartAction,cleanCart,deleteShoeToCartAction} = productReducer.actions

export default productReducer.reducer


/* ------------ action api -------------------- */
export const getshoestApi = () => {
  return async (dispatch1,getState) => {

      // console.log(getState())
      try {
          const result = await http.get('/product');

          const action = getshoesAction(result.data.content)
          dispatch1(action)
      } catch (err) {
          console.log({ err });
      }
  }
}

export const getshoesDetailApi=(id)=>{
  return async(dispatch2)=>{
    try{
      let result =await http.get(`/Product/getbyid?id=${id}`);
      const action=getshoesDetailAction(result.data.content);
      dispatch2(action);
    }catch(err){
      console.log(err);
    }
  }
}

export const orderCartApi = (orderCart) => {
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/order', orderCart);
      alert(result.data.content);
      const action = cleanCart([]);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};