import { createSlice } from '@reduxjs/toolkit'
import {http} from '../../utils/tools'

const initialState = {
    arrShoes:[],
    shoesDetail:[]
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
    }
  }
});

export const {getshoesAction,getshoesDetailAction} = productReducer.actions

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