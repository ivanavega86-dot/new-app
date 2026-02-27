import { useState,  } from "react"

const ItemCount = ({onAdd, stock})=> {
    
    const [count, setCount]= useState(1)
   

const sumar = ()=> {
    if (count < stock) {

        setCount(count + 1)
    }
   
}
const restar = ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}
const comprar =()=> {
    onAdd (count)
   
}
    return(
   <>
   {
    stock === 0
    ? <p>Lo sentimos no hay stock disponible</p>
    :
         <div className="counter-container">
  <div className="counter-controls">
    <button className="btn btn-dark" onClick={restar}>-</button>

    <span className="counter-value">{count}</span>

    <button className="btn btn-dark" onClick={sumar}>+</button>
  </div>

  <button className="btn btn-secondary buy-btn" onClick={comprar} disabled={stock === 0 || count === 0  }>
    Comprar
  </button>
  
</div>
   }
   </>
    )
}

export default ItemCount