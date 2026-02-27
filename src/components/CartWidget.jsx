import { BsCart3 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidget = ()=> {
    const {cart} = useContext(CartContext)
    console.log(cart);
    
    return (
        <div>
            <BsCart3 fontSize={"1.5rem"}/> 
             <Badge bg="danger">5</Badge>
        </div>
    )
}
export default CartWidget