import React from 'react';

export default function Product(props) {
  const { product } = props;
  return (
    <div className='card'>
      <img
        src={product.image}
        className='overflow-hidden'
        alt='...'
        style={{ width: 150, display: 'inline-block', margin: '0 72px' }}
      />
      <div className='card-body'>
        <p>{product.name}</p>
        <div className='card-body-content d-flex justify-content-between'>
          <span>{product.price}$</span>
          <span>Like</span>
        </div>
        <div
          className='footer'
          style={{ display: 'flex', flexDirection: 'row-reverse' }}
        >
          <button className='btn btn-success'>Buy</button>
        </div>
      </div>
    </div>
  );
}
