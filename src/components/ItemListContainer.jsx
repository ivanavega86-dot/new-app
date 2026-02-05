import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList";



const ItemListContainer = (props)=> {
    const [data, setData] = useState([])
    console.log("ItemListContainer", data);
    
console.log(getProducts);


    useEffect(()=>{
        getProducts()
        .then((res)=> setData (res))
        .catch ((error)=> console.log(error, "error"))
    },[])
    return (
        <div>
<h1>{props.Mensaje}</h1>
{/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
<ItemList data = {data}/>
        </div>
    )
}
export default ItemListContainer