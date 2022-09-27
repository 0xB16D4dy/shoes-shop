import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookLoginApi } from '../../redux/reducers/userReducer';

export default function LoginFaceBook() {
  const dispatch = useDispatch();
  const responseFacebook = (response) => {
    // const res = { facebook: response.accessToken };
    dispatch(facebookLoginApi({ facebookToken: response.accessToken }));
  };
  return (
    <>
      <FacebookLogin
        appId='5536907546377183'
        autoLoad={false}
        fields='name,email,picture'
        cssClass='login-facebook'
        icon='fa-brands fa-facebook'
        callback={responseFacebook}
      />
    </>
  );
}
