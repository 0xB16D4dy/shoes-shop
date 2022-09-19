import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Page404() {
  return (
    <div
      className='container text-center'
      style={{ minHeight: '240px', marginBottom: '110px', marginTop: '50px' }}
    >
      <h1 style={{ paddingTop: '100px' }}>404 - Not Found!</h1>
      <NavLink to='/login'>Go Home</NavLink>
    </div>
  );
}
