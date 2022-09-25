import React from 'react'
import { useSelector } from 'react-redux';

export default function Carts() {

    const {shoesDetail}=useSelector(state=>state.shoesReducer);
    // const dispatch=useDispatch();

  return (
    <div className='container'>
        <h1>CARTS</h1>
        <table className='table text-center'>
            <thead className='bg-dark text-light '>
                <tr>
                    <th><input type='checkbox' /></th>
                    <th>id</th>
                    <th>img</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td><input type='checkbox' /></td>
                        <td>{shoesDetail.id}</td>
                        <td ><img src={shoesDetail.image} alt='...' width={100}/></td>
                        <td>{shoesDetail.name}</td>
                        <td>{shoesDetail.price}</td>
                        <td>{shoesDetail.soLuong}</td>
                        <td>{shoesDetail.quantity}</td>
                        <td>
                            <button className='btn btn-success text-dark'>edit</button>
                            <button className='btn btn-danger text-dark'>delete</button>
                        </td>
                    </tr>
              
            </tbody>
        </table>
    </div>
  )
}
