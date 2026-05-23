import React from 'react'
import useCart from '../hooks/addToCart'
function Cards({plant}) {

  const {handleAddToCart, isInCart} = useCart()
  const isAdded = isInCart(plant)

  return (
    <div>
        <div className="card h-100">
            <img src={plant.image} className="card-img-top object-fit-cover" style={{ height: "220px" }} alt={plant.title}/>
            <div className="card-body">
                <h5 className="card-title">{plant.title}</h5>
                <p className="card-text">${plant.price}</p>
                <p className="card-text">{plant.description}</p>
                <button onClick={() => handleAddToCart(plant)} disabled={isAdded} className="btn btn-success">
                    {isAdded ? "Added to cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards
