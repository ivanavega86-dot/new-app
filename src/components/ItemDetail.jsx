import React from "react";
import Button from "./Button"


const ItemDetail =({detalle}) => {
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
          <p>Stock disponible:{detalle.stock}Unidades</p>
          <Button/>
        </div>
    )
}
export default ItemDetail