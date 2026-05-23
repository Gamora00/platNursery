import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


    
    const initialState ={
        items: []
    }

    const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers:{
            addToCart: (state, action) =>{
                state.items.push(action.payload)
            },
            incrementItem: (state, action) =>{
                const item = state.items.find((item)=> item.title === action.payload.title)
                if(item){
                    item.qty += 1
                }
            },

            decrementItem: (state, action) =>{
                const item = state.items.find((item)=> item.title === action.payload.title)
                if(item && item.qty > 1){
                    item.qty -= 1
                }
            },

            deleteItem: (state, action) =>{
                 state.items = state.items.filter(
                    (item) => item.title !== action.payload.title
                )
            }
        }
    })



export const {addToCart, incrementItem,decrementItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer
