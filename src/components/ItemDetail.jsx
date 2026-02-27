import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail =({detalle}) => {
    const [purchase, setPurchase] = useState(false)
    const {cart,addItem, itemQuantity} = useContext(CartContext)
    console.log(cart)
    const onAdd = (cantidad) => {
       /*  console.log(`Agregas al carrito ${cantidad} unidades de ${detalle.name}`); */
        addItem(detalle, cantidad)
        setPurchase(true)
    }
    const stockActualizado= detalle.stock - itemQuantity(detalle.id)
    return (
        <div style= {{
            textAlign: "center",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:"10px"
        }}>
          <h1>Detalle de {detalle.name}</h1>
          <img src={detalle.img} alt={detalle.name} />
          <p>{detalle.description}</p>
          <p>${detalle.price},00</p>
          <p>Stock disponible:{stockActualizado} Unidades</p>
        {purchase ? <Link className="btn btn-dark" to="/cart" >Ir al carrito</Link>:<ItemCount onAdd={onAdd} stock ={stockActualizado}/>}
        </div>
    )
}
export default ItemDetail