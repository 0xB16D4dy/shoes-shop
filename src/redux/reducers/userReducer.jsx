import { createSlice } from '@reduxjs/toolkit';
import { history } from '../../index';
import {
  ACCESS_TOKEN,
  eraseCookie,
  eraseStore,
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
  productFavoriteList: [],
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProductFavoriteAction: (state, action) => {
      state.productFavoriteList = action.payload;
    },
  },
});

export const { getProfileAction, getProductFavoriteAction } =
  userReducer.actions;

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
      // console.log(result.data.content);
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

export const getProductFavoriteApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get('/Users/getproductfavorite');
      // console.log(result.data.content);
      const action = getProductFavoriteAction(
        result.data.content.productsFavorite
      );
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLikeApi = (id)=>{
  return async (dispatch)=>{
    try{
      const result = await http.get('/Users/like?productId='+id)
      const success = () => {
        Modal.success({
          content: `${result.data.content} !`,
        });
      };
      success()
    }
    catch(error){
      console.log(error);
    }
  }
}

export const getUnLikeApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/Users/unlike?productId=${id}`);
      const success = () => {
        Modal.success({
          content: `${result.data.content} !`,
        });
      };
      success();
      dispatch(getProductFavoriteApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePasswordApi = (newPassword) => {
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/changePassword', newPassword);
      console.log(result.data.content);
      eraseCookie(ACCESS_TOKEN);
      eraseStore();
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
};

export const facebookLoginApi = (accessToken) => {
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/facebooklogin', accessToken);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 15);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      dispatch(getProfileApi());
    } catch (error) {
      console.log(error);
    }
  };
};
