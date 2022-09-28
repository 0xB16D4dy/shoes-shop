import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../utils/tools';

const initialState = {
  arrProduct: [],
  arrCat: [],
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    searchProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getAllCategoryAction: (state, action) => {
      state.arrCat = action.payload;
    },
  },
});

export const { searchProductAction, getAllCategoryAction } =
  productReducer.actions;

export default productReducer.reducer;

export const searchProductApi = (keyword) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/Product?keyword=${keyword}`);
      dispatch(searchProductAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductByCategoryApi = (keyword) => {
  return async (dispatch) => {
    try {
      // console.log(keyword)
      const result = await http.get(
        `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${keyword}`
      );
      // console.log(result.data.content)
      dispatch(searchProductAction(result.data.content))
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategoryApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `https://shop.cyberlearn.vn/api/Product/getAllCategory`
      );
      // console.log(result.data.content);
      const action = getAllCategoryAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
