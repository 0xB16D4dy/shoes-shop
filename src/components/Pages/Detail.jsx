import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getshoesDetailApi } from '../../redux/reuducers/shoesReducer';
import '../../assets/scss/pages/detail.scss'



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
            <p id="BtnSizeGiay"><button className='btn btn-success'>{shoesDetail.size}</button></p>
            <span>{shoesDetail.price}</span>
            <div className="info">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <button>Add to card</button>
          </div>`
      </div>
      <div className="realate">
        <h3>realate product</h3>
        <div className="row">
          {shoesDetail.relatedProducts.map((item,index)=>{
            return <div className="col-4" key={index}>
            <div className="card">
              <img src={item.image} alt='...' className='w-100' />
              <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className='bg-warning'>buy now</div>
                <div>85$</div>
              </div>
            </div>
        </div>
          })}
        </div>
      </div>
    </div>
  )
}
