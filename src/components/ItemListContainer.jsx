import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"




const ItemListContainer = (props)=> {
    const {mensaje} = props
    const [data, setData] = useState([]) 
    const {type}= useParams()
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(type){
                //filtro
               }else {
                setData(res.filter((prod)=> prod.category===type))
            }
        } )

        .catch ((error)=> console.log(error, "error"))
    },[type])
    return (
        <div>
<h1>{mensaje}</h1>
{/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
<ItemList data = {data}/>
        </div>
    )
}
export default ItemListContainer