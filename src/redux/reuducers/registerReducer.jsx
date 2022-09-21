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
    return async(dispatch)=>{
        var mess = '';
        try {
            let result = await axios ({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST',
                data: Register,
                
            },()=>{
                console.log(result);
            });
            mess = result.data
            console.log(mess.content)
            alert (mess.message);
        }
        catch (err){
            console.log(err)
            alert('loi')
        }
        // try{
        //     let result = await http.post(`/Users/signup`,Register);
        //     const action = getRegisterAction(result.data.content)
        //     dispatch(action)
        //   }catch(err){
        //     console.log(err);
        //   }
}
}