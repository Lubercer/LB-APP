import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CardContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, precioTotal } = useCartContext();
    if (cart.length === 0) {   
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>HACER COMPRA</Link>
            </>
        )
    }
    return (
        <>{
        cart.map (items => <ItemCart key={items.id} items={items}/>)
            }
        </>
    )

}
export default Cart;