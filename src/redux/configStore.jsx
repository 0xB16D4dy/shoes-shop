import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import registerReducer from './reducers/registerReducer';
import shoesReducer from './reducers/shoesReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    productReducer,
    shoesReducer,
    registerReducer
  },
});
