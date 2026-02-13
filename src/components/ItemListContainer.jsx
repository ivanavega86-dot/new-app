import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"




const ItemListContainer = (props)=> {
    const {Mensaje} = props
    const [data, setData] = useState([]) 
    const {type}= useParams()
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(type){
                //filtro
                setData(res.filter((prod)=> prod.category === type))
               }else {
                setData(res)
            }
        } )

        .catch ((error)=> console.log(error, "error"))
    },[type])
    return (
        <div>
<h1>{Mensaje}{type && <span style={{textTransform:"capitalize"}}>{type}</span>}</h1>
{/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
<ItemList data = {data}/>
        </div>
    )
}
export default ItemListContainer