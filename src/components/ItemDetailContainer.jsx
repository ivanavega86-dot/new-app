import { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import{doc, getDoc} from "firebase/firestore"
import { db } from "../service/firebase";


const ItemDetailConteiner = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando]= useState(true)
    const [notExist, setNotExist] = useState(null)
    const {id} = useParams()


    useEffect (()=>{
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                //seteo
                setDetalle({id: res.id, ... res.data()})
            }else {
                setNotExist(true)
            }
        
    })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
        
    },[id])
    if (notExist){
        return(
            <div>
               <h2>El producto no existe </h2>
               <Link className="btn btn-dark" to="/">Volver a Inicio </Link>
            </div>
        )
    }
    return (
        <div>
        {
            cargando 
            ? <Loader text="Cargando detalle del producto "/>
            : <ItemDetail detalle={detalle}/>
            
        }
        </div>
    )
}
export default ItemDetailConteiner