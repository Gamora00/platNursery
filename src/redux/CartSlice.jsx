import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


    
    const initialState ={
        items: []
    }

    const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers:{
            addItem: (state, action) =>{
                const item = state.items.find((item)=> item.title === action.payload.title)
                if(!item){
                    state.items.push(action.payload)
                }
            },
            addToCart: (state, action) =>{
                const item = state.items.find((item)=> item.title === action.payload.title)
                if(!item){
                    state.items.push(action.payload)
                }
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
            },
            removeItem: (state, action) =>{
                 state.items = state.items.filter(
                    (item) => item.title !== action.payload.title
                )
            },
            updateQuantity: (state, action) =>{
                const item = state.items.find((item)=> item.title === action.payload.title)
                if(item){
                    item.qty = action.payload.qty
                }
            }
        }
    })



export const {addItem, addToCart, incrementItem,decrementItem, deleteItem, removeItem, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer
