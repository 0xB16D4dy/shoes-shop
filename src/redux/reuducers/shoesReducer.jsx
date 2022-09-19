import { createSlice } from '@reduxjs/toolkit'
import {http} from '../../utils/tools'

const initialState = {
    arrShoes:[],
}

const productReducer = createSlice({
  name: 'shoesReducer',
  initialState,
  reducers: {
    getshoesAction:(state,action)=>{
      const arrShoes=action.payload;
      state.arrShoes=arrShoes
    }
  }
});

export const {getshoesAction} = productReducer.actions

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