import React, { useContext } from 'react'
import { CartContext } from '../context/cartcontext'

const CartView = () => {
    const {cart, clear, removeItem}= useContext(CartContext)
  return (
    <div>
        <h1>Tu Carrito</h1>
        <div>
            {
                cart.map((compra)=> (
                    <div key={compra.id} style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"2rem"}}>
                     <img src={compra.img} alt={compra.name} style={{width:"10rem"}}/>
                     <span>{compra.name}</span>
                     <span>{compra.price},00</span>
                     <span>Cantidad:{compra.quantity}</span>
                     <span>Total:${compra.quantity * compra.price},00</span>
                     <button className='btn btn-dark' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        <span>Total a pagar : $</span>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"80%", padding:"2rem"}}>
            <button className='btn btn-dark' onClick={clear}>Vaciar Carrito</button>
            <button className='btn btn-dark'>Terminar compra</button>
        </div>
    </div>
  )
}

export default CartView