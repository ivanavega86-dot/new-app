import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div style= {{
                textAlign: "center",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"10px"
            }}>
             <img src= {"https://i.postimg.cc/KYnWxfHB/No-Found-1024x1024.jpg"} alt={'Error'}/>

             <Link  className="btn btn-dark" to="/">Volver a Inicio</Link>
            </div>
  )
}

export default error