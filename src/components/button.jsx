import { MdPadding } from "react-icons/md"
import { useEffect,useState } from "react"

const BotonContador = () => {
    const [count, setCount]= useState(1)
    const [compra, setCompra] = useState(false)


    const sumar =() => {
        setCount(count + 1)
    }
    
    const restar =() => {
        if (count > 0) {

            setCount(count - 1)
        }
    }
    const comprar =() =>{
        setCompra (compra)

    }
    useEffect (() => {
        console.log ("sirve", compra) },[compra])
    
    return (
        <><button onClick={restar} style={{padding:"10px 10px", border:"none", cursor:"pointer"}}>-</button>
        <span>{count}</span>
        <button onClick={sumar}style={{padding:"10px 10px", border:"none", cursor:"pointer"}}>+</button>
        <button onClick={comprar}style={{padding:"10px 10px", border:"none", cursor:"pointer"}}>Comprar</button>
        </>
        
    )
}
export default BotonContador