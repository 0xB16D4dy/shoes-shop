import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../utils/tools';

const initialState = {
  arrShoes: [],
  shoesDetail: [],
  arrShoeCarts: [],
};

const productReducer = createSlice({
  name: 'shoesReducer',
  initialState,
  reducers: {
    getshoesAction: (state, action) => {
      const arrShoes = action.payload;
      state.arrShoes = arrShoes;
    },
    getshoesDetailAction: (state, action) => {
      const shoesDetail = action.payload;
    
      let listCart={id: shoesDetail.id, 
      name: shoesDetail.name,  
      image: shoesDetail.image,
      description: shoesDetail.description,
      price:shoesDetail.price,
      quantity:shoesDetail.quantity, 
      size:shoesDetail.size,
      soLuong:1}
      state.shoesDetail = listCart;
    },
    tangGiamDetail:(state,action)=>{
      const {id,tangGiam} = action.payload;
      console.log(id,tangGiam)
      // let arrDetail=[...state.shoesDetail];
      // console.log('cart',arrDetail)
      let index=state.shoesDetail.findIndex((item)=>item.id===id);
      console.log(index)
      if(tangGiam){
        state.shoesDetail[index].soLuong +=1;
      }
      else{
        // if(arrDetail[index].soLuong>1){
          state.shoesDetail[index].soLuong -=1;
        // }
      }
      // state.shoesDetail=arrDetail
    },
    addShoeToCartAction: (state, action) => {
      const shoe = action.payload;
      console.log(shoe)
      let listCart={"id": shoe.id, 
      name: shoe.name,  
      image: shoe.image,
      description: shoe.description,
      price:shoe.price,
      quantity:shoe.quantity, 
      soLuong:1}
      let index = state.arrShoeCarts.findIndex((item) => item.id === listCart.id);
      console.log(index)
      if (index !== -1) {
        state.arrShoeCarts[index].quantity += 1;
      } else {
        state.arrShoeCarts.push(listCart);
      }
    },
    tangGiamSoLuong:(state,action)=>{
      const [id,tangGiam] = action.payload;
      console.log('acb',id,tangGiam);
      let cartUpdate=state.arrShoeCarts.findIndex(item=>item.id===id);
     console.log('evs',cartUpdate)
      if(tangGiam){
        state.arrShoeCarts[cartUpdate].soLuong +=1;
      }
      else{
          if(state.arrShoeCarts[cartUpdate].soLuong>1){     
          state.arrShoeCarts[cartUpdate].soLuong -=1;        
      }
    }
    },
    deleteShoeToCartAction: (state, action) => {
      const id = action.payload;
      state.arrShoeCarts = state.arrShoeCarts.filter((item) => item.id !== id);
      console.log(state.arrShoeCarts)
    },
    cleanCart: (state, action) => {
      state.arrShoeCarts = action.payload;
    },
  },
});

export const {
  getshoesAction,
  getshoesDetailAction,
  addShoeToCartAction,
  deleteShoeToCartAction,
  cleanCart,
  tangGiamSoLuong,
  tangGiamDetail
} = productReducer.actions;

export default productReducer.reducer;

/* ------------ action api -------------------- */
export const getshoestApi = () => {
  return async (dispatch1, getState) => {
    // console.log(getState())
    try {
      const result = await http.get('/product');
      const action = getshoesAction(result.data.content);
      dispatch1(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

export const getshoesDetailApi = (id) => {
  return async (dispatch2) => {
    try {
      let result = await http.get(`/Product/getbyid?id=${id}`);
      const action = getshoesDetailAction(result.data.content);
      dispatch2(action);
    } catch (err) {
      console.log(err);
    }
  };
};

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
