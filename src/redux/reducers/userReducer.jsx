import { createSlice } from '@reduxjs/toolkit';
import { history } from '../../index';
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  http,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from '../../utils/tools';
import { Modal } from 'antd';

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/signin', userLogin);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 15);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
      history.push('/Page404');
    }
  };
};
export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/getProfile');
      //Lấy thông tin profile => đưa lên redux
      const action = getProfileAction(result.data.content);
      dispatch(action);
      console.log(result.data.content);
      //Lưu vào storage
      setStoreJson(USER_LOGIN, result.data.content);
      history.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfileApi = (userUpdate) => {
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/updateProfile', userUpdate);
      // console.log(userUpdate, 'result:', result.data.content);
      const success = () => {
        Modal.success({
          content: `Update profile ${result.data.content} !`,
        });
      };
      dispatch(getProfileApi());
      success();
    } catch (error) {
      console.log(error);
    }
  };
};


