import { useDispatch } from 'react-redux'
import { incrementItem, decrementItem } from '../redux/CartSlice'

function useIncrement() {
  const dispatch = useDispatch()
  

  const handleIncrement = (plant) => {
        dispatch(incrementItem(plant))
    }

   const handleDecrement = (plant) => {
        dispatch(decrementItem(plant))
    }  
    

    return{
        handleIncrement,
        handleDecrement
    }
    
}

export default useIncrement
