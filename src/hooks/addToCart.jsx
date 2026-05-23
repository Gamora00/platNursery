import {useSelector, useDispatch} from 'react-redux'
import { addItem } from '../redux/CartSlice'
function useCart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart.items)


  const handleAddToCart = (plant) =>{
    dispatch(addItem(plant))
  }

  const isInCart = (plant) =>{
    return cartItems.some((item)=> item.title === plant.title)
  }

  const totalItems = cartItems.reduce((total, item)=>{
    return total + item.qty
  }, 0)

  const totalAmount = cartItems.reduce((total, item)=>{
      return total + item.price * item.qty
  },0)

   return {
    cartItems,
    handleAddToCart,
    isInCart,
    totalAmount,
    totalItems
  };
}

export default useCart
