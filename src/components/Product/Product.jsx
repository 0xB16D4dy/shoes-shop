import React from 'react';

export default function Product({ product }) {
  console.log(product);
  return (
    <div className='card '>
      <div className='card-img'>
        <img src={product.image} alt='...' />
      </div>
      <div className='card-body'>
        <p>{product.name}</p>
        <div className='card-body-content'>
          <span>
            <i class='fa-solid fa-heart'></i>
          </span>
          <span>
            <i class='fa-solid fa-dollar-sign'></i>
            {product.price}
          </span>
        </div>
        <div className='footer'>
          <button className='btn-buy'>Buy</button>
        </div>
      </div>
    </div>
  );
}
