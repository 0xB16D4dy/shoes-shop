import { Divider } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  deleteShoeToCartAction,
  orderCartApi,
  tangGiamSoLuong
} from '../../redux/reducers/shoesReducer';
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  USER_LOGIN,
} from '../../utils/tools';

export default function Carts() {
  const { arrShoeCarts } = useSelector((state) => state.shoesReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const renderCarts = () => {
    // console.log(arrCarts);
    return arrShoeCarts?.map((item, index) => {
        console.log(item)
      return (
        <tr key={index} >
          <td>
            <input type='checkbox' />
          </td>
          <td>{item.id}</td>
          <td>
            <img src={item.image} alt='...' width={100} />
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td >
            <button className='btn btn-primary mx-2'onClick={()=>
              dispatch(tangGiamSoLuong([item.id,true]))}>+</button>
                  {item.soLuong}
            <button className='btn btn-primary mx-2'onClick={()=>
              dispatch(tangGiamSoLuong([item.id,false]))}>-</button>
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <button className='btn-edit'>edit</button>
            <button
              className='btn-delete'
              onClick={() => {
                dispatch(deleteShoeToCartAction(item.id));
              }}
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className='carts container'>
      <h3>CARTS</h3>
      <Divider />
      <table className='table text-center'>
        <thead className='table-header'>
          <tr>
            <th>
              <input type='checkbox' />
            </th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className='table-body'>{renderCarts()}</tbody>
      </table>
      <div className='form-group text-end'>
        <button
          className='btn btn-warning'
          onClick={() => {
            if (!getStore(ACCESS_TOKEN)) {
              alert('Đăng nhập để order!');
              return navigate('/login');
            }
            let arrOrder = [];
            for (let i = 0; i < arrShoeCarts.length; i++) {
              arrOrder[i] = {
                productId: arrShoeCarts[i].id,
                quantity: arrShoeCarts[i].quantity,
              };
            }
            const orderCart = {
              orderDetail: arrOrder,
              email: getStoreJson(USER_LOGIN).email,
            };
            const actionThunk = orderCartApi(orderCart);
            dispatch(actionThunk);
          }}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
}