import { BsCart3 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidget = ()=> {
    const {cart, cartQty} = useContext(CartContext)
    console.log(cart);
    
    return (
        <div>
            <BsCart3 fontSize={"1.5rem"}/> 
            { cart.length >0 && <Badge bg="danger">{cartQty()}</Badge>}
        </div>
    )
}
export default CartWidget