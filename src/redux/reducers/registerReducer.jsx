import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/tools';
import axios from 'axios'

const initialState = {
    
}

const registerReducer = createSlice({
  name: 'registerReducer',
  initialState,
  reducers: {
    getRegisterAction:(state,action)=>{
        const Register = action.payload;
        state.Register=Register
    }
  }
});

export const {getRegisterAction} = registerReducer.actions

export default registerReducer.reducer

export const registerApi=(values)=>{
    return async(dispatch)=>{
        try{
            const result = await http.post('Users/signup', values);
            console.log(result.data.content);
            alert('dang ki thanh cong')
        }
        catch(err){
            console.log(err)
            alert('email da ton tai vui long dang ki lai')
        }
}
}