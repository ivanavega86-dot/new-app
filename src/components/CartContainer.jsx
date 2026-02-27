import React, { useContext } from 'react'
import CartView from './CartView'
import { CartContext } from '../context/cartcontext'
import EmptyCart from './EmptyCart'

const CartContainer = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
    {
        !cart.length
        ?<EmptyCart/>
        :<CartView/>
    }
    </>
  )
}

export default CartContainer