import React from 'react'
import Item from './Item'


const ItemList = ({data}) => {
  return (
    <div style={{Display:"flex", justifyContent:"space-around", alignItems:"Center", flexWrap:"wrap"}}>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList