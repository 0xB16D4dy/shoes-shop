import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import registerReducer from './reuducers/registerReducer';
import shoesReducer from './reuducers/shoesReducer';

export const store = configureStore({
  reducer: {
    shoesReducer,
    registerReducer,
    userReducer
  },
});
