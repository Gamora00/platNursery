import React from 'react'
import useCart from '../hooks/addToCart'
import { Link } from 'react-router-dom'
function Navbar() {
  const {totalItems} = useCart()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid position-relative">
        <Link to="/listing" className="navbar-brand d-flex align-items-center gap-2">
          <span className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle" style={{ width: "36px", height: "36px" }}>
            <i className="bi bi-flower1"></i>
          </span>
          <span className="fw-bold">Paradise Nursery</span>
        </Link>

        <span className="position-absolute start-50 translate-middle-x fw-semibold fs-5">
          Plant
        </span>

        <Link to="/shopping" className="ms-auto text-dark fs-4">
          <i className="bi bi-cart position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
              <span className="visually-hidden">cart items</span>
            </span>
          </i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
