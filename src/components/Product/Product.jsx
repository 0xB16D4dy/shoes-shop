import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getshoesDetailApi } from '../../redux/reducers/shoesReducer';
import { getLikeApi } from '../../redux/reducers/userReducer';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='card '>
      <div className='card-img'>
        <img src={product.image} alt='...' />
      </div>
      <div className='card-body'>
        <p>{product.name}</p>
        <div className='card-body-content'>
          <p className='content-price'>
            {product.price}$
          </p>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(getLikeApi(product.id));
            }}
          >
            <i className='fa-solid fa-heart'></i>
          </p>
        </div>
        <div className='footer'>
          <button
            className='btn-buy'
            onClick={() => {
              navigate(`/detail/${product.id}`);
            }}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
