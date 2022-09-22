import React from 'react'

export default function Carts() {
  return (
    <div className='container'>
        <h1>CARTS</h1>
        <table className='table text-center'>
            <thead className='bg-dark text-light '>
                <th><input type='checkbox' /></th>
                <th>id</th>
                <th>img</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
                <th>action</th>
            </thead>
            <tbody>
                <td><input type='checkbox' /></td>
                <td>id</td>
                <td>img</td>
                <td>name</td>
                <td>price</td>
                <td>quantity</td>
                <td>total</td>
                <td>
                    <button className='btn btn-success text-dark'>edit</button>
                    <button className='btn btn-danger text-dark'>delete</button>
                </td>
            </tbody>
        </table>
    </div>
  )
}
