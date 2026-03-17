import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { db } from "../service/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"





const ItemListContainer = (props)=> {
    const {Mensaje} = props
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
    const {type}= useParams()
    //FIREBASE
    useEffect(()=>{
      //conectarnos a nuestra coleccion
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true)
    //pedir docs
     const prodColl = type ? query(collection(db,"productos"),where("category","==", type)):  collection(db,"productos")
     getDocs(prodColl)
     .then((res)=>{
        //limpiar data 
       const list = res.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        }
       })
        setData(list)
     })
        .catch ((error)=> console.log(error))
        .finally(()=>setLoading(false))
    },[type])
    return (
        <>
        {
            loading
            ? <Loader text = {type ?"Cargando categoria" : "Cargando productos"}/>
            : <div>
<h1>{Mensaje}{type && <span style={{textTransform:"capitalize"}}>{type}</span>}</h1>
{/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
<ItemList data = {data}/>
        </div>
        }
        </>
    )
}
export default ItemListContainer