import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Page404() {
  return (
    <div
      className='container text-center my-5'
    >
      <h1>404 - Not Found!</h1>
      <NavLink to='/login'>Go Home</NavLink>
    </div>
  );
}
