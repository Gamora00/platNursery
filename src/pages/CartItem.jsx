import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useCart from '../hooks/addToCart'
import useIncrement from '../hooks/incrementItem'
import { removeItem } from '../redux/CartSlice'

function CartItem() {
  const {cartItems, totalAmount, totalItems} = useCart()
  const {handleIncrement, handleDecrement} = useIncrement()
  const dispatch = useDispatch()

  return (
    <div className="container-fluid d-flex justify-content-center flex-column align-items-center py-4">
      <h1>Total Cart Amount: ${totalAmount}</h1>
      <h2>Total Plants: {totalItems}</h2>

      <div className="card mb-3" style={{width: "540px"}}>
        {cartItems.map((element)=>(
          <div key={element.title} className="row g-0 border-bottom">
            <div className="col-md-4">
              <img src={element.image} className="img-fluid rounded-start" alt={element.title}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">Unit Price: ${element.price}</p>
                <div className="d-flex align-items-center gap-2">
                  <button onClick={()=> handleDecrement(element)} className="btn btn-primary btn-sm">-</button>
                  <span className="px-3 py-1 border rounded text-center">{element.qty}</span>
                  <button onClick={() => handleIncrement(element)} className="btn btn-primary btn-sm">+</button>
                </div>
                <br />
                <p className="card-text"><small className="fw-bold">Total: ${element.price * element.qty}</small></p>
                <button onClick={()=> dispatch(removeItem(element))} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column">
        <Link to="/listing" className="btn btn-success">Continue Shopping</Link>
        <br />
        <button onClick={()=> alert('Coming Soon')} className="btn btn-success">Checkout</button>
      </div>
    </div>
  )
}

export default CartItem
