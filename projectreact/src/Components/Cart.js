import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { clearCart } from './utils/cartSlice'

const Cart = () => {
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        //dispacth
        dispatch(clearCart())

    }
   
    console.log(cartItems)
    return (
        <>
        Cart {cartItems.length} Items Added Successfully
        <Button
        onClick={()=>{
            handleClearCart()
        }}
        >Clear Cart</Button>
    <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
    
    {/* <CartItem {...cartItems[0]}/> */}

    {
        cartItems.map((element,index)=>{
            return <CartItem {...element} key={element.id}/> 
        })
    }
    </div>
    </>


  )
}

export default Cart