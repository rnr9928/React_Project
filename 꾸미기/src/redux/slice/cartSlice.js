import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    totalAmout:0,
    totalQuantity:0

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
        const newItem = action.payload
        const exiItem = state.cartItems.find(
            (item) => item.id === newItem.id
        );
        state.totalQuantity++

        if(!exiItem){
            state.cartItems.push({
                id: newItem.id,
                productName: newItem.productName,
                imgUrl: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
        }
        else{
            exiItem.quantity++
            exiItem.totalPrice = Number(exiItem.totalPrice) + Number(newItem.price)
        }
        
        state.totalAmout = state.cartItems.reduce((total,item)=> total
        +Number(item.price) * Number(item.quantity),0)
        // console.log(state.totalQuantity)
        // console.log(state.cartItems)
        // console.log(newItem)
    },

    deleteItem:(state,action)=>{
        const id = action.payload
        const existItem = state.cartItems.find(item=> item.id === id)
    
        if(existItem){
            state.cartItems = state.cartItems.filter(item=> item.id !==id)
            state.totalQuantity = state.totalQuantity -  existItem.quantity
        }
    
        state.totalAmout = state.cartItems.reduce((total,item)=> total
            +Number(item.price) * Number(item.quantity),0)
      }
  },

  
});

export const cartAction = cartSlice.actions

export default cartSlice.reducer