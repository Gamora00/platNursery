import React from 'react'
import useCart from '../hooks/addToCart'
import useIncrement from '../hooks/incrementItem'
import {Link} from 'react-router-dom'
import {deleteItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
function Shopping() {
    const {cartItems, totalAmount} = useCart()
    const {handleIncrement, handleDecrement} = useIncrement()
    const dispatch = useDispatch()
  return (
    <div className='container-fluid d-flex justify-content-center flex-column align-items-center'>
        <h1>Total Cart Amount: ${totalAmount}</h1>
        <div className="card mb-3" style={{width: "540px"}}>
        {cartItems.map((element)=>(
        <div className="row g-0">
            <div className="col-md-4">
            <img src={element.image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">${element.price}</p>
                <div className='d-flex align-items-center gap-2'>
                    <button onClick={()=> handleDecrement(element)} className='btn btn-primary btn-sm'>-</button>
                    <span className='px-3 py-1 border rounded text-center'>{element.qty}</span>
                    <button onClick={() => handleIncrement(element)} className='btn btn-primary btn-sm'>+</button>
                </div>
                <br />
                <p className="card-text"><small className="fw-bold">Total: ${element.price * element.qty}</small></p>
                <button onClick={()=> dispatch(deleteItem(element))} className='btn btn-danger'>Delete</button>
            </div>
            </div>
        </div>
        ))}
        </div>
        <div className='d-flex flex-column'>
            <Link to={'/listing'} className='btn btn-success'>Continue Shopping</Link>
            <br />
            <button className='btn btn-success'>Checkout</button>
        </div>
    </div>
  )
}

export default Shopping
