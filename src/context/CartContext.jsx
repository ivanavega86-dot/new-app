import { createContext, useState } from "react";
//defini contexto

export const CartContext = createContext();
//declaro el proveedor
export const CartProvider = ({children})=> {
    const [cart, setCart] = useState ([])


    //agregar un item al carrito contemplar repetidos
    const addItem =(item, qty) => {
    
        if (isInCart(item.id)){
          setCart(
           cart.map ((prod)=>{
            if(prod.id === item.id){
//sumar cantidades 
               return{...prod, quantity: prod.quantity + qty}
            }else {
                return prod
            }
           })
          )
            
        }else {
//si no existe lo agrego en e lcarrito
            setCart ([...cart, {...item, quantity:qty}])
        }

        

    }
    //borrar todo el carrito
    const clear = () => {
        setCart([])

    }
    //eliminar 1 item del carrito 
     const removeItem =(id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
     }
     //devolver 1 booleanosi esta o no en el carrito
     const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
     }
     //cantidad total 
     const cartQty =()=>{

     }
     //totaL A PAGAR
     const total =()=>{
        
     }
     const itemQuantity =(id) =>{
        const inCart = cart.find((prod) => prod.id === id)
        if(inCart){
            return inCart.quantity
        }else {
           return 0
        }
     }
//las herramientas (funciones)
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, itemQuantity }}>
           {children}
        </CartContext.Provider>
    )
}