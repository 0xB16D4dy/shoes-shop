import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addShoeToCartAction,
  getshoesDetailApi,
  tangGiamDetail,
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
  // console.log(shoesDetail.size)
  // var arrOrder = [];
  //   for (let i = 0; i < shoesDetail.size.length; i++) {
  //       arrOrder+=shoesDetail.size[i]
  //     }
  //   console.log(arrOrder);

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
            <p>
              <button
                className='btn btn-primary'
                onClick={() => dispatch(tangGiamDetail([shoesDetail.id, true]))}
              >
                +
              </button>
              {shoesDetail.soLuong}
              <button
                className='btn btn-primary mx-3'
                onClick={() =>
                  dispatch(tangGiamDetail([shoesDetail.id, false]))
                }
              >
                -
              </button>
            </p>
          </div>
          <button
            onClick={() => {
              dispatch(addShoeToCartAction(shoesDetail));
            }}
          >
            Add to card
          </button>
        </div>
      </div>
      <div className='realate mb-3'>
        <h3 className='text-center'>-Realate product-</h3>
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
