import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/tools';
import axios from 'axios'

const initialState = {
    Register:[
        {email:'',phone:'',passowrd:'',name:'',gender:true}
    ]

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
        var mess = '';
        try {
            let result = await axios ({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST' ,
                data:values,
                
           });
            mess = result.data
            console.log(mess.content)
            alert ('ban da dang ki thanh cong');
        }
        catch (err){
            console.log(err)
            alert('dang ki khong thanh cong')
        }
}
}