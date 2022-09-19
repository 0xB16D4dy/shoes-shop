import { configureStore } from '@reduxjs/toolkit';
import shoesReducer from './reuducers/shoesReducer';

export const store = configureStore({
  reducer: {
    shoesReducer
  },
});
