import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getshoesDetailApi } from '../../redux/reducers/shoesReducer';
import '../../assets/scss/pages/Detail/detail.scss'



export default function Detail() {
  const params=useParams();
  const {shoesDetail}=useSelector(state=>state.shoesReducer);
  const dispatch=useDispatch();
  

  useEffect(()=>{
    let {id} =params;

    const action=getshoesDetailApi(id);
    dispatch(action)
  },[params.id])
  // const rendersize=()=>{
  //   return shoesDetail.map((item,index)=>{

  //     for(let index;index<shoesDetail.length;index++){
  //         index=shoesDetail[index];
  //         return <button key={item}>{index.size}</button>
  //     }
      
      
  //   })
  // }

  return (
    <div className='container'>
      <div className="carausel d-flex">
        <div className="img-shoes">
            <img src={shoesDetail.image} alt='...' />
          </div>
          <div className="title">
            <h1>{shoesDetail.name}</h1>
            <p>{shoesDetail.description}</p>
            <h3>Avaible sizze</h3>
            <p><button className='btn btn-success'>{shoesDetail.size}</button></p>
            <span>{shoesDetail.price}$</span>
            <div className="d-flex align-items-center">
              <button>+</button>
              <p>{shoesDetail.soLuong}</p>
              <button>-</button>
            </div>
            <button>Add to card</button>
          </div>`
      </div>
        <div className="realate">
          <h3>realate product</h3>
          <div className="row">
              <div className="col-4" >
                <div className="card">
                  <img src={shoesDetail.image} alt='...' className='w-100' />
                  <div className="info">
                    <h3>{shoesDetail.name}</h3>
                    <p>{shoesDetail.shortDescription}</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                      <button >buy now</button>
                      <p>{shoesDetail.quantity}$</p>
                  </div>
                </div>
              </div> 
              <div className="col-4" >
                <div className="card">
                  <img src={shoesDetail.image} alt='...' className='w-100' />
                  <div className="info">
                    <h3>{shoesDetail.name}</h3>
                    <p>{shoesDetail.shortDescription}</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                      <button >buy now</button>
                      <p>{shoesDetail.quantity}$</p>
                  </div>
                </div>
              </div>
              <div className="col-4" >
                <div className="card">
                  <img src={shoesDetail.image} alt='...' className='w-100' />
                  <div className="info">
                    <h3>{shoesDetail.name}</h3>
                    <p>{shoesDetail.shortDescription}</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                      <button >buy now</button>
                      <p>{shoesDetail.quantity}$</p>
                  </div>
                </div>
              </div>  
          </div>
        </div>
    </div>
  )
}