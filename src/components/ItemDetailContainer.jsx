import { useState, useEffect } from "react";
import {getItem} from "../mock/asyncMock"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


const ItemDetailConteiner = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando]= useState(true)
    const {id} = useParams()


    useEffect (()=>{
        getItem(id)
        .then((res)=>setDetalle(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
        
    },[id])
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