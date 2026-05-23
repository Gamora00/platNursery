import './App.css'
import ProductList from './pages/ProductList'
import CartItem from './pages/CartItem'
import AboutUs from './pages/AboutUs'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="background-image landing-container">
            <div className="landing-content">
              <div className="landing-intro text-center">
                <h1>
                  Welcome To <br />
                  Paradise Nursery
                </h1>
                <p>Where Green Meets Serenity</p>
                <Link to="/listing" className="btn btn-success">Get Started</Link>
              </div>
              <AboutUs />
            </div>
          </div>
        }/>
        <Route path="/listing" element={<ProductList/>}/>
          
          <Route path="/shopping" element={<CartItem/>}/>
          <Route path="/cart" element={<CartItem/>}/>
      </Routes>
    
      

    </>
  )
}

export default App
