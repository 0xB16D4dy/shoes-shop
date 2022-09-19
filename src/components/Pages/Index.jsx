import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getshoestApi } from '../../redux/reuducers/shoesReducer';

export default function Index() {
  const {arrShoes}=useSelector(state=>state.shoesReducer);
  const dispatch= useDispatch();
  const getAllshoesApi=()=>{
    const actionThunk = getshoestApi();
    dispatch(actionThunk)
  }

  useEffect(()=>{
    getAllshoesApi()
  },[])

  const renderShoes=()=>{
    return arrShoes.map((item,index)=>{
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
    })
  }
  const carouselShoes=()=>{
      return arrShoes.map((item,index)=>{
        let shoes=arrShoes[index];
        if(shoes===arrShoes[0]){
          return <div className="carousel-item active "data-bs-interval="10000" key={index}>
          <div className=' d-flex justify-content-center align-items-center'>
                <div className="image w-80">
                  <img src={item.image} className='w-100' alt='...' />
                </div>
                <div className="content w-20">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <button className='btn btn-warning'>buy now</button>
                </div>
          </div>
        </div>
        }
        else{
          return <div className="carousel-item"data-bs-interval="10000" key={index}>
                    <div className=' d-flex justify-content-center align-items-center'>
                      <div className="image w-80">
                        <img src={item.image} className='w-100' alt='...' />
                      </div>
                      <div className="content w-20">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <button className='btn btn-warning'>buy now</button>
                      </div>
                    </div>
                  </div>
        }
      })
    }
  return (
    <div className="home">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="container">
              <div className="carousel-inner">
                {carouselShoes()}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>

    <div className="feature">
      <div className="container">
        <h1 className='text-center'>Product Feature</h1>
        <div className="row">
          {renderShoes()}
        </div>
      </div>
    </div>


    </div>


  )
}
