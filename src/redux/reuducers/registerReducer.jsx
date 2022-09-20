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

export const registerApi=(Register)=>{
    return async(dipatch)=>{
        var mess = '';
        try {
            let result = await axios ({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST',
                data: Register,
        
            });
            mess = result.data
            console.log(mess.content)
            alert (mess.message);
        }
        catch (err){
            console.log(err)
        }
}
}