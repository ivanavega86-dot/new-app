import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    const [validMail, setValidMail]= useState("")
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(false)
    const [orderId, setOrderId]= useState("")
    const [cart, total, clear]= useContext(CartContext)



    const buyerData =(e)=>{
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
    const terminarCompra = (e) =>{

        e.preventDefault()
        if(!buyer.name || !buyer. lastname || !buyer.address || !buyer. email || !validMail){
            setError("Por favor complete todos los campos")
        }else if(buyer.email !==validMail){
            setError("Los correos no coinciden")
        }else {
            setLoading(true)
            setError(null)
        
        let orden ={
            comprador: buyer,
            carrito: cart,
            total: total(),
            fecha:serverTimestamp()
        }
        const orderColl = collection(db, "orders")
        // agrtego el documento 
        addDoc(orderColl, orden)
        .then ((res)=>{
            setOrderId(res.id)
            clear()
            
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
    }   
    }
    if(!cart.length && !orderId){
        return <EmptyCart/> 
    }
  return (
    <>

{

orderId
    ?<div>
        <h1>Muchas gracias por su compra</h1>
        <h3>Su orden es: {orderId}</h3>
        <Link className='btn btn-dark' to='/'>Volver a Inicio</Link>
    </div>
    
      :<div>
        <h1> Completa con tus datos</h1>
         {error && <span style={{color:'red', fontWeight:'bold'}}>{error}</span>}
        <form className='p-4 border rounded shadow-sm bg -light' onSubmit={terminarCompra}>
            <input  name="name" placeholder='Ingrese su Nombre' className='form-control' type="text" onChange={buyerData} />
             <input  name="lastname" placeholder="Ingrese su Apellido" className='form-control' type="text" onChange={buyerData} />
              <input name="address" placeholder='Ingrtese su Direccion ' className='form-control' type="text" onChange={buyerData}/>
               <input name="email" placeholder='Ingrese su Correo' className='form-control' type="email" onChange={buyerData} />
                <input name="secondemail" placeholder='Repita su Correo' className='form-control' type="email" onChange={(e)=>setValidMail(e.target.value)} />
           
             <button type='submit' className='btn btn-success' disabled={loading} >{loading ? 'Procesando Compra...' : 'Generar Orden'}</button>
        </form>
    </div>
}
    
    </>
  )
}

export default Checkout