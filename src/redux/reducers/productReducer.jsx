import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../utils/tools';

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    searchProductAction: (state, action) => {
        state.arrProduct = action.payload
    },
  },
});

export const {searchProductAction} = productReducer.actions;

export default productReducer.reducer;

export const searchProductApi = (keyword) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/Product?keyword=${keyword}`);
      dispatch(searchProductAction(result.data.content))
    } catch (error) {
      console.log(error);
    }
  };
};
