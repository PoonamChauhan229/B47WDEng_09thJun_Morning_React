//createSlice
import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    // name
    //state
    //reducers

    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items=[]
        }
    }
})
//export
//export actions
export const {addItem,clearCart}=cartSlice.actions;

//export reducer
export default cartSlice.reducer