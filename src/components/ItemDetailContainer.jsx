import { useState, useEffect } from "react";
import {getItem} from "../mock/asyncMock"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailConteiner = () => {
    const [detalle, setDetalle] = useState({})
    const {id} = useParams()


    useEffect (()=>{
        getItem(id)
        .then((res)=>setDetalle(res))
        .catch((error)=> console.log(error))
        
    },[id])
    return (
        <div><ItemDetail detalle={detalle}/></div>
    )
}
export default ItemDetailConteiner