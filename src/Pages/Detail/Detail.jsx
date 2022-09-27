import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addShoeToCartAction,
  getshoesDetailApi,
} from '../../redux/reducers/shoesReducer';
import '../../assets/scss/pages/Detail/detail.scss';
import { useRef } from 'react';

export default function Detail() {
  const params = useParams();
  const { shoesDetail } = useSelector((state) => state.shoesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = params;
    
    const action = getshoesDetailApi(id);
    dispatch(action);
  }, [params.id]);

  return (
    <div className='container'>
      <div className='carausel d-flex'>
        <div className='img-shoes'>
          <img src={shoesDetail.image} alt='...' />
        </div>
        <div className='title'>
          <h1>{shoesDetail.name}</h1>
          <p>{shoesDetail.description}</p>
          <h3>Avaible sizze</h3>
          <p id='BtnSizeGiay'>
            <button className='btn btn-success'>{shoesDetail.size}</button>
          </p>
          <span>{shoesDetail.price}</span>
          <div className='d-flex'>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <button
            onClick={() => {
              dispatch(addShoeToCartAction(shoesDetail));
            }}
          >
            Add to card
          </button>
        </div>
        `
      </div>
      <div className='realate'>
        <h3>realate product</h3>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <img src={shoesDetail.image} alt='...' className='w-100' />
              <div className='info'>
                <h3>{shoesDetail.name}</h3>
                <p>{shoesDetail.shortDescription}</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <button>buy now</button>
                <p>{shoesDetail.quantity}$</p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img src={shoesDetail.image} alt='...' className='w-100' />
              <div className='info'>
                <h3>{shoesDetail.name}</h3>
                <p>{shoesDetail.shortDescription}</p>
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <button>buy now</button>
                <p>{shoesDetail.quantity}$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
