import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/CartSlice'

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        title: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5',
        price: 15,
        qty: 1,
      },
      {
        title: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5',
        price: 18,
        qty: 1,
      },
      {
        title: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333',
        price: 12,
        qty: 1,
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        title: 'Lavender',
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec',
        price: 14,
        qty: 1,
      },
      {
        title: 'Jasmine',
        image: 'https://loremflickr.com/640/480/jasmine,flower?lock=39',
        price: 20,
        qty: 1,
      },
      {
        title: 'Mint',
        image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec',
        price: 10,
        qty: 1,
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        title: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361',
        price: 22,
        qty: 1,
      },
      {
        title: 'Pothos',
        image: 'https://loremflickr.com/640/480/pothos,plant?lock=66',
        price: 13,
        qty: 1,
      },
      {
        title: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',
        price: 16,
        qty: 1,
      },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart.items)
  const cartQuantity = cartItems.reduce((total, item)=> total + item.qty, 0)

  const isPlantInCart = (plant) =>{
    return cartItems.some((item)=> item.title === plant.title)
  }

  const handleAddToCart = (plant) =>{
    dispatch(addItem(plant))
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
                {cartQuantity}
              </span>
            </i>
          </Link>
        </div>
      </nav>

      <div className="container py-4">
        {plantsArray.map((section)=>(
          <section key={section.category} className="mb-5 text-center">
            <h2 className="mb-4">{section.category}</h2>

            <div className="row g-4">
              {section.plants.map((plant)=>(
                <div key={plant.title} className="col-12 col-sm-6 col-lg-4">
                  <div className="card h-100">
                    <img
                      src={plant.image}
                      className="card-img-top object-fit-cover"
                      style={{ height: '220px' }}
                      alt={plant.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{plant.title}</h5>
                      <p className="card-text">${plant.price}</p>
                      <button
                        onClick={()=> handleAddToCart(plant)}
                        disabled={isPlantInCart(plant)}
                        className="btn btn-success"
                      >
                        {isPlantInCart(plant) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default ProductList
