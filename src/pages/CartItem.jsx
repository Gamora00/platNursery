import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from '../redux/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart.items)
  const totalItems = cartItems.reduce((total, item)=> total + item.qty, 0)
  const totalAmount = cartItems.reduce((total, item)=> total + item.price * item.qty, 0)

  const handleIncrease = (item) =>{
    dispatch(updateQuantity({...item, qty: item.qty + 1}))
  }

  const handleDecrease = (item) =>{
    if(item.qty > 1){
      dispatch(updateQuantity({...item, qty: item.qty - 1}))
    }
  }

  const handleDelete = (item) =>{
    dispatch(removeItem(item))
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">Paradise Nursery</Link>
          <div className="mx-auto d-flex gap-3">
            <Link to="/" className="text-decoration-none text-dark">Home</Link>
            <Link to="/listing" className="text-decoration-none text-dark">Plants</Link>
            <Link to="/cart" className="text-decoration-none text-dark">Cart</Link>
          </div>
          <Link to="/cart" className="text-dark fs-4">
            <i className="bi bi-cart position-relative">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            </i>
          </Link>
        </div>
      </nav>

      <div className="container-fluid d-flex justify-content-center flex-column align-items-center py-4">
        <h1>Total Cart Amount: ${totalAmount}</h1>
        <h2>Total Plants: {totalItems}</h2>

        <div className="card mb-3" style={{width: '540px'}}>
          {cartItems.map((item)=>(
            <div key={item.title} className="row g-0 border-bottom">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.title}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Unit Price: ${item.price}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button onClick={()=> handleDecrease(item)} className="btn btn-primary btn-sm">-</button>
                    <span className="px-3 py-1 border rounded text-center">{item.qty}</span>
                    <button onClick={()=> handleIncrease(item)} className="btn btn-primary btn-sm">+</button>
                  </div>
                  <br />
                  <p className="card-text"><small className="fw-bold">Total: ${item.price * item.qty}</small></p>
                  <button onClick={()=> handleDelete(item)} className="btn btn-danger">Delete</button>
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
    </>
  )
}

export default CartItem
