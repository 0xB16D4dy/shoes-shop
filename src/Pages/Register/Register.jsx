import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerApi } from '../../redux/reducers/registerReducer';


export default function Register() {
    const dispatch=useDispatch();
    //lay du lieu tu form
    const frm=useFormik({
        initialValues: { //Dữ liệu ban đầu mặc định của form
            email: '',
            password: '',
            // setPassword:'',
            phone:'',
            name:'',
            gender:false
        },
        validationSchema:Yup.object().shape({
            email:Yup.string().required('email không được bỏ trống !').email('email không đúng định dạng !'),
            password: Yup.string().required('password không được bỏ trống !').min(1,'pass từ 1 - 32 ký tự!').max(32,'pass từ 1 - 32 ký tự!'),
            // setPassword:Yup.string().required('setpassword không được bỏ trống !'),
            name:Yup.string().required('name không được bỏ trống !'),
            phone:Yup.string().required('phone không được bỏ trống !')
        }),
        onSubmit: (values) => {
            console.log(values);
            
            dispatch(registerApi(values))


        }
    })


  return (
    <form className='container d-flex row'onSubmit={frm.handleSubmit}>
        <div className="form-group col-6">
            <p>Email</p>
            <input className='form-control' id='email' name='email'onChange={frm.handleChange} onBlur={frm.handleBlur} />
            {frm.errors.email ? <span className='text-danger'>{frm.errors.email}</span>: '' }
            <p>Password</p>
            <input className='form-control' id='password' name='password' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.password ? <span className='text-danger'>{frm.errors.password}</span>: '' }
            <p>Password confirm</p>
            <input className='form-control' id='setPassword' name='setPassword' />
            {/* {frm.errors.setPassword ? <span className='text-danger'>{frm.errors.setPassword}</span>: '' } */}
        </div>

        <div className="form-group col-6">
            <p>Name</p>
            <input className='form-control' id='name' name='name'onChange={frm.handleChange} onBlur={frm.handleBlur} />
            {frm.errors.name ? <span className='text-danger'>{frm.errors.name}</span>: '' }
            <p>Phone</p>
            <input className='form-control' id='phone' name='phone'onChange={frm.handleChange} onBlur={frm.handleBlur} />
            {frm.errors.phone ? <span className='text-danger'>{frm.errors.phone}</span>: '' }
            <p>Gender</p>
            <input type="radio" name="gender" value="true" />
                <label for="">Male</label>
            <input type="radio" name="gender" value="false" />
                <label for="">Female</label>
        </div>
        <div className='form-group'>
            <button className='btn btn-success' type="submit">SUBMIT</button>
        </div>
    </form>
  )
}
